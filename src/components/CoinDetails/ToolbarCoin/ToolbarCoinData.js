import React from "react";
// Material-Ui
import {
  Toolbar,
  Container,
  Box,
  Button,
  Typography,
  Avatar,
  Skeleton,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Link } from "react-router-dom";
import "./toolbarCoin.css";
import millify from "millify";
const ToolbarCoinData = ({
  coinPrice,
  changePrice,
  coinName,
  coinSymbol,
  coinRank,
  coinIcon,
  rank,
  ExchangeNumber,
  MarketsNumber,
  history,
  check,
  change,
}) => {
  return (
    <>
      <section className="coin-toolbar">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            width: "100%",
            borderBottom: check
              ? "1.5px solid rgba(255, 255, 255, 0.12)"
              : "1.5px solid rgb(223, 225, 252)",
            width: "100%",
            pb: 1,
          }}
        >
          <Avatar
            src={coinIcon}
            alt={coinName}
            sx={{
              width: { xs: "25px", md: "35px" },
              height: { xs: "25px", md: "35px" },
            }}
          />
          <Typography
            variant="h6"
            component={"h5"}
            fontWeight="500"
            fontSize={{ xs: "16px", sm: "18px" }}
            fontFamily="Poppins"
            sx={{ ml: 2 }}
          >
            {coinName}
          </Typography>
          <Typography
            variant="subtitle2"
            component={"h5"}
            fontFamily="Poppins"
            fontWeight="400"
            sx={{
              ml: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "12px",
              color: "#666",
              marginLeft: "0.5rem",
              background: "rgba(104, 78, 255, 0.087)",
              padding: "0.2rem 0.5rem",
              borderRadius: "8px",
              maxWidth: "250px",
              fontWeight: "600",
            }}
          >
            {coinSymbol}
          </Typography>
          <Typography
            variant="subtitle2"
            component={"h5"}
            fontFamily="Poppins"
            fontSize={{ xs: "14px" }}
            fontWeight="500"
            sx={{
              ml: 2,
              width: "fit-content",
              height: "25px",
              borderRadius: "6px",
              border: "1px solid rgb(215, 215, 215)",
              padding: "0.5rem !important",
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              justifyContent: "center",
              color: "rgba(104, 78, 255, 1)",
            }}
          >
            #{coinRank}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              flexDirection: { xs: "column", sm: "row" },
              margin: { xs: "0.2rem auto", md: "0" },
            }}
          >
            <Typography
              variant="h6"
              component={"h5"}
              fontFamily="Poppins"
              fontWeight="600"
              fontSize={{ xs: "14px", sm: "16px", lg: "18px" }}
              sx={{ ml: { xs: 0, md: 4 }, mt: { xs: 2, sm: 0 } }}
            >
              $ {Number(coinPrice).toLocaleString()}
            </Typography>
            <Typography
              variant="h6"
              component="h6"
              fontSize={{ xs: "14px", sm: "16px", lg: "18px" }}
              fontFamily="Poppins"
              fontWeight="medium"
              sx={{
                color: `${changePrice > 0 ? "green" : "red"}`,
                display: "flex",
                alignItems: "center",
                ml: { xs: 0, sm: 2 },
                justifyContent: "center",
              }}
            >
              {changePrice > 0 ? (
                <ArrowDropUpIcon sx={{ color: "green" }} />
              ) : (
                <ArrowDropDownIcon sx={{ color: "red" }} />
              )}
              {changePrice}%
            </Typography>
          </Box>
        </Box>
        <Box
          className="coin-navbar"
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            margin: "0 auto",
            borderBottom: check
              ? "1.5px solid rgba(255, 255, 255, 0.12)"
              : "1.5px solid rgb(223, 225, 252)",
            width: "100%",
          }}
        >
          <li
            style={{
              borderBottom: `${
                history.includes("/coin") ? "1px solid rgb(18, 89, 241)" : ""
              }`,
            }}
          >
            <Link to={`/coin/${rank}`}>
              <Typography variant="subtitle2" component={"h6"}>
                Overview
              </Typography>
            </Link>
          </li>
          {/* <li
            style={{
              borderBottom: `${
                history.includes("/coin/exchanges")
                  ? "1px solid rgb(18, 89, 241)"
                  : ""
              }`,
            }}
          >
            <Link to={`/coin/exchanges`}>
              <Typography variant="subtitle2" component={"div"}>
                Exchanges
              </Typography>
              <Typography variant="subtitle2" component={"span"}>
                {millify(Number(ExchangeNumber))}
              </Typography>
            </Link>
          </li>
          <li
            style={{
              borderBottom: `${
                history.includes("/coin/markets")
                  ? "1px solid rgb(18, 89, 241)"
                  : ""
              }`,
            }}
          >
            <Link to={`/coin/markets`}>
              <Typography variant="subtitle2" component={"h6"}>
                Markets
              </Typography>
              <Typography variant="subtitle2" component={"span"}>
                {millify(Number(MarketsNumber))}
              </Typography>
            </Link>
          </li> */}
        </Box>
      </section>
    </>
  );
};

export default ToolbarCoinData;
