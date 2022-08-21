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
  Avatar,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Loader from "../../Loader/Loader";
import millify from "millify";
import "./exchMarkStyle.css";
import { Link } from "react-router-dom";

const CoinMarkets = ({ markets, name, check, change }) => {
  return (
    <section className="coinMarkets-section">
      <Typography
        fontWeight="bold"
        variant="h5"
        sx={{
          mb: 3,
          p: 0.5,
          borderBottom: check
            ? "1.5px solid rgba(255, 255, 255, 0.12)"
            : "1.5px solid rgb(223, 225, 252)",
        }}
        fontSize={{ xs: "18px", sm: "20px" }}
        component="h5"
      >
        Best Markets Of {name}
      </Typography>
      <Typography
        gutterBottom
        variant="body2"
        component={"p"}
        fontSize={{ xs: "13px", sm: "14px" }}
      >
        The top crypto exchanges that have {name} available for trading, ranked
        by 24h trading volume and the current price.
      </Typography>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          margin: "1rem ,0",
          marginTop: "1.5rem",
        }}
      >
        <Typography variant="subtitle2" component="h6" fontWeight="bold">
          MARKET
        </Typography>
        <Typography variant="subtitle2" component="h6" fontWeight="bold">
          24H VOLUME
        </Typography>
      </div>
      <Box className="Box Markets-box">
        {markets ? (
          markets.map((item, index) => {
            return (
              <li
                key={index}
                style={{
                  borderBottom: check
                    ? "1.5px solid rgba(255, 255, 255, 0.12)"
                    : "1.5px solid #ffffff20",
                }}
              >
                <div className="names">
                  <Typography variant="h6" component="h6" fontSize="13px">
                    {item.rank}.
                  </Typography>
                  <Avatar
                    src={item?.exchange?.iconUrl}
                    alt={item.name}
                    sx={{ width: "30px", height: "30px" }}
                  />
                  <span>
                    <Typography
                      variant="subtitle1"
                      component={"h5"}
                      fontWeight="bold"
                      fontSize={{
                        xs: "14px",
                        sm: "15px",
                        md: "17px",
                       
                      }}
                    >
                      {item?.base?.symbol}/{item?.quote?.symbol}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      component={"h5"}
                      fontSize={{
                        xs: "13px",
                        sm: "14px",
                        md: "16px",
                      
                      }}
                    >
                      {item?.exchange?.name}
                    </Typography>
                  </span>
                </div>
                <div className="prices">
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    component="h5"
                    fontSize={{
                      xs: "13px",
                      sm: "14px",
                      md: "16px",
                    
                    }}
                  >
                    ${millify(item["24hVolume"])}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    fontWeight="medium"
                    component="h5"
                    fontSize={{
                      xs: "13px",
                      sm: "14px",
                      md: "16px",
                      
                    }}
                  >
                    ${Number(item.price).toLocaleString()}
                  </Typography>
                </div>
              </li>
            );
          })
        ) : (
          <Loader />
        )}
      </Box>
    </section>
  );
};

export default CoinMarkets;
