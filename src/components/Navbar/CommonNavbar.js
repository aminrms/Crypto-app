import React, { useEffect, useState } from "react";
// Material-UI
import {
  AppBar,
  Button,
  Container,
  Toolbar,
  CssBaseline,
  Box,
  Skeleton,
  Avatar,
  Typography,
  Menu,
  Fade,
  MenuItem,
  Divider,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import StarIcon from "@mui/icons-material/Star";
import { Link, useHistory } from "react-router-dom";
import "./CommonNavbar.css";
import {
  getCoinExchanges,
  getCoinMarkets,
  getCoins,
  getExchanges,
  getMarkets,
} from "../../Api/api";
import Loader from "../Loader/Loader";
import millify from "millify";
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 12,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px !important",
    height: "300px",

    "& .MuiMenu-list": {
      padding: "8px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      },
      "&:active": {
        backgroundColor: "rgb(210, 224, 255)",
      },
    },
  },
}));
const CommonNavbar = ({ check, change }) => {
  const history = useHistory();
  const [coins, setCoins] = useState([]);
  const [coinExchanges, setExchanges] = useState([]);
  const [coinMarkets, setMarkets] = useState([]);
  const [coinValue, setCoinValue] = useState("");
  useEffect(() => {
    const fetchAPICoins = async () => {
      setCoins(await getCoins("60"));
    };
    fetchAPICoins();
  });
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCoinValue = (event) => {
    setCoinValue(event.target.value);
  };
  const filterCoins = coins.filter((item) => {
    return item.name
      .toLocaleLowerCase()
      .includes(coinValue.toLocaleLowerCase());
  });
  return (
    <>
      <Toolbar
        sx={{
          borderBottom: check
            ? "1.5px solid rgba(255, 255, 255, 0.12)"
            : "1.5px solid rgb(223, 225, 252)",
          width: "100%",
          p: 2,
          justifyContent: "space-between",
          mb: 2,
          mt: 5,
        }}
        className="common-navbar-toolbar"
      >
        <Box
          className="logo-box"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: check ? "#fff" : "rgb(18, 89, 241)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar
              sx={{
                display: "flex",
                alignItems: "center",
                margin: " 0 0.35rem",
                justifyContent: "center",
                width: { xs: "25px", md: "30px" },
                height: { xs: "25px", md: "30px" },
              }}
              src={require("../../Images/logo.png")}
              alt="logo"
            />
            <Typography
              fontWeight="bold"
              variant="h5"
              component={"h5"}
              color={check ? "#fff" : "rgb(18, 89, 241)"}
              sx={{ mr: 3 }}
              fontSize={{ xs: "16px", md: "20px" }}
            >
              Crypto App
            </Typography>
          </Link>
          <Typography
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "center",
            }}
            variant="body2"
            component={"p"}
          >
            <StarIcon
              sx={{
                color: "#f2c31e",
                fontSize: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: " 0 0.2rem",
              }}
            />
            Get an Airdrop $100 AirUSD – use COINR100
          </Typography>
        </Box>
        <Box
          className="links-box"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <li>
            <Link to="/">
              <Typography
                fontWeight="medium"
                variant="subtitle1"
                component={"h5"}
                color={`${
                  history.location.pathname.includes("/") &&
                  !history.location.pathname.includes("/exchanges")
                    ? "rgb(18, 89, 241)"
                    : "textSecondary"
                }`}
                sx={{ mr: 3, display: { xs: "none", md: "flex" } }}
              >
                CryptoCurrencies
              </Typography>
            </Link>
          </li>
          {/* <li>
            <Link to="/exchanges">
              <Typography
                fontWeight="medium"
                variant="subtitle1"
                component={"h5"}
                color={`${
                  history.location.pathname.includes("/exchanges")
                    ? "rgb(18, 89, 241)"
                    : "textSecondary"
                }`}
                sx={{ mr: 3 }}
              >
                Exchanges
              </Typography>
            </Link>
          </li> */}
          <li>
            <Button
              id="demo-customized-button"
              aria-controls={open ? "demo-customized-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              disableElevation
              onClick={handleClick}
            >
              <SearchIcon sx={{ fontSize: "30px" }} />
            </Button>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "95%",
                  margin: "0.2rem auto",
                }}
              >
                <input
                  type={"text"}
                  value={coinValue}
                  onChange={handleCoinValue}
                  className="search-input"
                  placeholder="Search coins"
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    outline: "none",
                    padding: "0.5rem 0.6rem",
                    backgroundColor: "transparent",
                    borderRadius: "8px",
                    marginRight: "3px",
                  }}
                />
                <div>
                  <SearchIcon
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "25px",
                    }}
                  />
                </div>
              </Box>
              <MenuItem
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  pl: 4,
                  pr: 4,
                }}
              >
                <Typography sx={{ ml: 1 }} variant="subtitle2" component="span">
                  <Link
                    to={"/"}
                    style={{
                      textDecoration: "none",
                      color: "rgb(18, 89, 241)",
                    }}
                  >
                    more
                  </Link>
                </Typography>
              </MenuItem>
              {filterCoins ? (
                filterCoins.map((coin) => {
                  return (
                    <MenuItem
                      key={coin?.rank}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        pl: 4,
                        pr: 4,
                      }}
                    >
                      <Link
                        to={`/coin/${coin?.rank}`}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          marginRight: "5rem",
                          color: "#666",
                          textDecoration: "none",
                        }}
                      >
                        <Avatar
                          sx={{ width: "20px", height: "20px" }}
                          src={coin.iconUrl}
                          alt={coin.name}
                        />
                        <Typography
                          sx={{ ml: 1 }}
                          variant="subtitle2"
                          component="span"
                        >
                          {coin?.name}/{coin?.symbol}
                        </Typography>
                      </Link>
                      <div>
                        <Typography
                          variant="subtitle2"
                          fontWeight="medium"
                          component="span"
                        >
                          ${millify(Number(coin?.price))}
                        </Typography>
                      </div>
                    </MenuItem>
                  );
                })
              ) : (
                <Loader />
              )}
            </StyledMenu>
          </li>
        </Box>
      </Toolbar>
    </>
  );
};

export default CommonNavbar;
