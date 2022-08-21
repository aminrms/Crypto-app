import React from "react";
// Material-Ui
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
  Grid,
} from "@mui/material";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// Css
import "./supply.css";
// momment
import moment from "moment";
import Loader from "../../Loader/Loader";
import millify from "millify";
const SupplyInfo = ({ supply, name, symbol, check, change }) => {
  const SupplyInfoData = [
    {
      name: "Circulating supply",
      value: `${millify(Number(supply?.circulating))} ${symbol}`,
      desc: "s",
    },
    {
      name: "Non-circulating supply",
      value: ` ${(supply?.total - supply?.circulating).toLocaleString()}
        ${symbol}`,
      desc: "s",
    },
    {
      desc: "s",
      name: "Max supply",
      value: `${millify(Number(supply?.max))}`,
    },
    {
      desc: "s",
      name: "Total supply",
      value: `${millify(Number(supply?.total))} ${symbol}`,
    },
  ];
  const updateTime = moment(Date(supply?.supplyAt))
    .startOf("minutes")
    .fromNow();
  return (
    <section className="supply-info-section">
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
        Supply information
      </Typography>
      <Typography
        gutterBottom
        variant="body1"
        component={"p"}
        fontSize={{ xs: "13px", sm: "14px" }}
      >
        View the total and circulating supply of {name}, including details on
        how the supplies are calculated.
      </Typography>
      <Box
        className="supply-box"
        sx={{
          backgroundColor: check ? "rgb(255,255,255,0.12)" : "#f1f6ff",
        }}
      >
        <li
          style={{
            borderBottom: check
              ? "1.5px solid rgba(255, 255, 255, 0.12)"
              : "1.5px solid rgb(223, 225, 252)",
          }}
        >
          <div>
            <a href="https://support.coinranking.com/article/76-what-does-verified-supply-mean">
              <CheckCircleIcon />
              Verified supply
            </a>
            <Typography
              variant="subtitle2"
              color="textSecondary"
              fontSize={"13px"}
              fontFamily="Poppins"
              component={"h5"}
            >
              Updated {updateTime}
            </Typography>
          </div>
          <div>
            {((1 - supply?.circulating / supply?.total) * 100).toFixed(1)}%
          </div>
        </li>
        {SupplyInfoData.map((item, index) => {
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
                {/* Icon */}
                <Typography
                  fontFamily="Poppins"
                  variant="subtitle2"
                  fontSize={{ xs: "13px", sm: "14px" }}
                  component="h5"
                >
                  {item.name}
                  {item.desc ? (
                    <PriorityHighIcon
                      className="exclamation-icon"
                      color={check ? "primary" : "#121212"}
                    />
                  ) : null}
                </Typography>
              </div>
              <Typography
                fontFamily="Poppins"
                variant="subtitle1"
                fontWeight={"bold"}
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

export default SupplyInfo;
