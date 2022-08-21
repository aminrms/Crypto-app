import React from "react";
// Material-UI
import {
  Select,
  Skeleton,
  Container,
  Toolbar,
  Box,
  ButtonGroup,
  Button,
  Typography,
  Checkbox,
  MenuItem,
} from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import WavesIcon from "@mui/icons-material/Waves";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
// Css
import "./ValueStatistics.css";
// millify
import millify from "millify";
import Loader from "../../Loader/Loader";
const ValueStatistics = ({
  _24Volume,
  allHighPrice,
  allHightPriceTime,
  btcPrice,
  description,
  FullDilutedMarketCap,
  links,
  supply,
  marketCap,
  price,
  rank,
  name,
  check,
  change,
}) => {
  const ValueStatisticsData = [
    {
      name: "Price to USD",
      value: `$${Number(price).toLocaleString()}`,
      icon: (
        <MonetizationOnIcon
          className="icon"
          color={check ? "#fff" : "primary"}
          sx={{
            fontSize: { xs: "13px", sm: "14px", md: "16px", lg: "25px" },
          }}
        />
      ),
    },
    {
      name: "Price to BTC",
      value: `${Number(btcPrice).toFixed(5)} BTC`,
      icon: (
        <CurrencyBitcoinIcon
          className="icon"
          color={check ? "#fff" : "primary"}
          sx={{
            fontSize: { xs: "13px", sm: "14px", md: "16px", lg: "25px" },
          }}
        />
      ),
    },
    {
      name: "Rank",
      value: rank,
      desc: "s",
      icon: (
        <EqualizerIcon
          className="icon"
          color={check ? "#fff" : "primary"}
          sx={{
            fontSize: { xs: "13px", sm: "14px", md: "16px", lg: "25px" },
          }}
        />
      ),
    },
    {
      desc: "s",
      name: "24h Volume",
      value: `$ ${millify(Number(_24Volume))}`,
      icon: (
        <InvertColorsIcon
          className="icon"
          color={check ? "#fff" : "primary"}
          sx={{
            fontSize: { xs: "13px", sm: "14px", md: "16px", lg: "25px" },
          }}
        />
      ),
    },
    {
      name: "MarketCap",
      desc: "s",
      value: `$ ${millify(marketCap)}`,
      icon: (
        <WavesIcon
          className="icon"
          color={check ? "#fff" : "primary"}
          sx={{
            fontSize: { xs: "13px", sm: "14px", md: "16px", lg: "25px" },
          }}
        />
      ),
    },
    {
      desc: "s",
      name: "Fully diluted market cap",
      value: `$ ${millify(Number(FullDilutedMarketCap))}`,
      icon: (
        <WavesIcon
          className="icon"
          color={check ? "#fff" : "primary"}
          sx={{
            fontSize: { xs: "13px", sm: "14px" },
          }}
        />
      ),
    },
    {
      desc: "s",
      name: "All-time high (daily avg.)",
      value: `$ ${millify(Number(allHighPrice))}`,
      time: Date(allHightPriceTime),
      icon: (
        <MilitaryTechIcon
          className="icon"
          color={check ? "#fff" : "primary"}
          sx={{
            fontSize: { xs: "13px", sm: "14px" },
          }}
        />
      ),
    },
  ];
  return (
    <section className="value-statistic-section">
      <Typography
        sx={{
          mb: 3,
          borderBottom: check
            ? "1.5px solid rgba(255, 255, 255, 0.12)"
            : "1.5px solid rgb(223, 225, 252)",
            p:0.5
        }}
        variant="h5"
        component="h5"
        fontWeight="bold"
        fontSize={{ xs: "17px", sm: "20px" }}
        fontFamily="Poppins"
      >
        Value Statistics
      </Typography>
      <Typography
        gutterBottom
        variant="body1"
        component={"p"}
        fontSize={{ xs: "13px", sm: "14px" }}
      >
        An overview showing the statistics of {name}, such as the base and quote
        currency, the rank, and trading volume.
      </Typography>
      <Box className="values-box">
        {ValueStatisticsData.map((item, index) => {
          return item.value ? (
            <li
              key={index}
              style={{
                borderBottom: check
                  ? "1.5px solid rgba(255, 255, 255, 0.12)"
                  : "1.5px solid rgb(223, 225, 252)",
              }}
            >
              <div>
                {item.icon}
                <Typography
                  fontFamily="Poppins"
                  variant="subtitle2"
                  fontSize={{ xs: "13px", sm: "14px" }}
                  component="h5"
                >
                  {item.name}
                  {item.desc ? (
                    <PriorityHighIcon
                      color={check ? "primary" : "#121212"}
                      sx={{
                        fontSize: { xs: "13px", sm: "14px" },
                      }}
                      className="exclamation-icon"
                    />
                  ) : null}
                </Typography>
              </div>
              <Typography
                variant="subtitle1"
                fontWeight={"bold"}
                fontFamily="Poppins"
                fontSize={{ xs: "13px", sm: "14px" }}
                component="span"
              >
                {item.value}
              </Typography>
            </li>
          ) : (
            <Loader />
          );
        })}
      </Box>
    </section>
  );
};

export default ValueStatistics;
