import React, { useContext } from "react";
// Material-Ui
import {
  AppBar,
  Button,
  Container,
  Toolbar,
  CssBaseline,
  Box,
  Skeleton,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
// Millify Package
import millify from "millify";
import { GlobalStatsContextProvider } from "../../Context/GlobalStatsContext";
import { CryptoContextProvider } from "../../Context/CryptoContextProvider";
import { Link } from "react-router-dom";

// Css
import "./NavbarStyle.css";
import CommonNavbar from "./CommonNavbar";
const Navbar = ({ check, change }) => {
  const GlobalStats = useContext(GlobalStatsContextProvider);
  const NavbarData = [
    {
      totals: `${Number(GlobalStats?.totalCoins).toLocaleString()}`,
      name: "Cryptos",
    },
    { totals: GlobalStats?.totalExchanges, name: "Exchanges" },
    {
      totals: `$${millify(Number(GlobalStats?.totalMarketCap)).toLocaleString()}`,
      name: "Market Cap",
    },
    {
      totals: `$${millify(
        Number(GlobalStats?.total24hVolume)
      ).toLocaleString()}`,
      name: "24h Vol",
    },
    {
      totals: `${millify(GlobalStats?.btcDominance)}%`,
      name: "BTC Dominance",
    },
  ];
  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
      width: 32,
      height: 32,
      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#f2c31e"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  }));
  return (
    <>
      <Container maxWidth="xl">
        <AppBar
          className="appBar"
          sx={{
            width: "100%",
            backgroundColor: check
              ? "rgba(0,0,0 ,0.1)"
              : "rgba(235, 235, 235, 0.8) !important",
            boxShadow: check
              ? "none"
              : "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px !important",
          }}
        >
          <Container maxWidth="xl">
            <Toolbar className="navbar-toolbar">
              <Box className="box-left">
                {NavbarData.length ? (
                  NavbarData.map((stat, index) => {
                    return (
                      <li key={index}>
                        <Typography
                          variant="subtitle2"
                          component="span"
                          color="textSecondary"
                        >
                          {stat.name} :{" "}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          component="span"
                          color="primary"
                        >
                          {stat.totals ? (
                            stat.totals
                          ) : (
                            <Skeleton
                              variant="rectangular"
                              width="40px"
                              height="10px"
                            />
                          )}
                        </Typography>
                      </li>
                    );
                  })
                ) : (
                  <Skeleton variant="text" with={10} height={3} />
                )}
              </Box>
              <Box className="box-right">
                <li>
                  <MaterialUISwitch
                    checked={check}
                    onChange={change}
                    sx={{ m: 1 }}
                    defaultChecked
                  />
                </li>
                <li className="signUp-logIn-Buttons">
                  <a href="#">
                    <Button
                      variant="outlined"
                      sx={{ color: "#fff", textTransform: "unset" }}
                    >
                      Log In
                    </Button>
                  </a>
                  <a href="#">
                    <Button
                      variant="contained"
                      sx={{ color: "#fff", textTransform: "unset" }}
                    >
                      Sign Up
                    </Button>
                  </a>
                </li>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Container>
      <CommonNavbar check={check} change={change} />
    </>
  );
};

export default Navbar;
