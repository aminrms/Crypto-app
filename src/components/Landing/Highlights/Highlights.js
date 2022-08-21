import React, { useContext, useEffect, useState } from "react";
// Material-Ui
import {
  Container,
  Switch,
  Box,
  Button,
  Card,
  Toolbar,
  Typography,
  Grid,
  Avatar,
  Skeleton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// Context
import { GlobalStatsContextProvider } from "../../../Context/GlobalStatsContext";
import axios from "axios";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// Css
import "./HighlightsStyle.css";
const Highlights = ({ check, change }) => {
  const BestCoins = useContext(GlobalStatsContextProvider);
  const [highlightDisplay, setHighlightDisplay] = useState(true);
  const highlightHandler = () => {
    setHighlightDisplay(!highlightDisplay);
  };
  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 45,
    height: 22,
    padding: 0,
    borderRadius: "12px",
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 28,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(16px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: "0.08rem 0.1rem",
      "&.Mui-checked": {
        transform: "translateX(22px)",
        // transform: "translateY(px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 20,
      height: 20,
      borderRadius: "50%",
      transition: "all 0.5s cubic-bezier(0.215, 0.610, 0.355, 1)",
    },
    "& .MuiSwitch-track": {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,.35)"
          : "rgba(0,0,0,.25)",
      boxSizing: "border-box",
    },
  }));
  return (
    <Container maxWidth="xl" sx={{ mb: 5, mt: 6 }}>
      <Toolbar className="highlights-toolbar">
        <Typography
          flexGrow={1}
          variant="h5"
          fontWeight={"bold"}
          component="h3"
          sx={{ mb: 4 }}
        >
          Today's Cryptocurrency Prices by Market Cap
        </Typography>
        <AntSwitch
          checked={highlightDisplay}
          onChange={highlightHandler}
          defaultChecked
          inputProps={{ "aria-label": "ant design" }}
        />
      </Toolbar>
      <Container
        maxWidth="xl"
        sx={{ display: highlightDisplay ? "flex" : "none" }}
      >
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={12} md={4} lg={6}>
            <Card
              className="highlights-card"
              sx={{
                boxShadow: check
                  ? "none"
                  : "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px !important",
              }}
            >
              <Toolbar className="card-header">
                <Typography
                  variant="h6"
                  fontWeight={"bold"}
                  component="h6"
                  fontSize={"14px"}
                  flexGrow={1}
                >
                  BestCoins
                </Typography>
                <Button
                  href="#"
                  variant="text"
                  sx={{ textTransform: "unset" }}
                  fontSize={"14px"}
                >
                  More
                  <ChevronRightIcon fontSize="40" />
                </Button>
              </Toolbar>
              <ul className="coins-lists">
                {BestCoins?.bestCoins?.length
                  ? BestCoins?.bestCoins.map((coin) => {
                      return (
                        <a
                          href={coin.coinrankingUrl}
                          key={coin.name}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            textDecoration: "none",
                            color: check ? "#fff" : "rgb(18, 89, 241)",
                          }}
                        >
                          <Avatar
                            src={coin.iconUrl}
                            alt={coin.name}
                            sx={{ width: "25px", height: "25px" }}
                          />
                          <Typography
                            variant="subtitle1"
                            component="div"
                            flexGrow={1}
                            fontSize="15px"
                            sx={{ ml: 1, color: check ? "#fff" : "primary" }}
                          >
                            {coin.name}
                            <Typography
                              sx={{
                                fontSize: "12px",
                                color: "#888",
                                marginLeft: "0.5rem",
                                background: "rgba(104, 78, 255, 0.087)",
                                padding: "0.2rem 0.5rem",
                                borderRadius: "6px",
                              }}
                              fontWeight="bold"
                              variant="subtitle2"
                              component="span"
                            >
                              {coin.symbol}
                            </Typography>
                          </Typography>
                        </a>
                      );
                    })
                  : [1, 2, 3].map((item) => {
                      return (
                        <Skeleton
                          key={item}
                          variant="text"
                          sx={{ margin: "0.5rem" }}
                        />
                      );
                    })}
              </ul>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={6}>
            <Card
              className="highlights-card"
              sx={{
                boxShadow: check
                  ? "none"
                  : "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px !important",
              }}
            >
              <Toolbar className="card-header">
                <Typography
                  variant="h6"
                  fontWeight={"bold"}
                  component="h6"
                  fontSize={"14px"}
                  flexGrow={1}
                >
                  Newest Coins
                </Typography>
                <Button
                  href="#"
                  variant="text"
                  sx={{ textTransform: "unset" }}
                  fontSize={"14px"}
                >
                  More
                  <ChevronRightIcon fontSize="40" />
                </Button>
              </Toolbar>
              <ul className="coins-lists">
                {BestCoins?.newestCoins?.length
                  ? BestCoins?.newestCoins.map((coin) => {
                      return (
                        <a
                          href={coin.coinrankingUrl}
                          key={coin.name}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            textDecoration: "none",
                            color: check ? "#fff" : "rgb(18, 89, 241)",
                          }}
                        >
                          <Avatar
                            src={coin.iconUrl}
                            alt={coin.name}
                            sx={{ width: "25px", height: "25px" }}
                          />
                          <Typography
                            variant="subtitle1"
                            component="div"
                            flexGrow={1}
                            fontSize="15px"
                            sx={{ ml: 1, color: check ? "#fff" : "primary" }}
                          >
                            {coin.name}
                            <Typography
                              sx={{
                                fontSize: "12px",
                                color: "#888",
                                marginLeft: "0.5rem",
                                background: "rgba(104, 78, 255, 0.087)",
                                padding: "0.2rem 0.5rem",
                                borderRadius: "6px",
                              }}
                              fontWeight="bold"
                              variant="subtitle2"
                              component="span"
                            >
                              {coin.symbol}
                            </Typography>
                          </Typography>
                        </a>
                      );
                    })
                  : [1, 2, 3].map((item) => {
                      return (
                        <Skeleton
                          key={item}
                          variant="text"
                          sx={{ margin: "0.5rem" }}
                        />
                      );
                    })}
              </ul>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default Highlights;
