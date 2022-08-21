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
import "./LinksCoin.css";
import Loader from "../../Loader/Loader";
const LinksCoin = ({ links, check, change }) => {
  const LinksCoinData = [{}];
  return (
    <section className="links-coin-section">
      <Typography
        sx={{
          mb: 3,
          mt: 2,
          p: 0.5,
          borderBottom: check
            ? "1.5px solid rgba(255, 255, 255, 0.12)"
            : "1.5px solid rgb(223, 225, 252)",
        }}
        variant="h5"
        component="h5"
        fontWeight="bold"
        fontSize={{ xs: "17px", sm: "20px" }}
        fontFamily="Poppins"
      >
        Links
      </Typography>
      <Box
        className="linksCoin-box"
        sx={{
          backgroundColor: check ? "rgb(255,255,255,0.12)" : "#f1f6ff",
        }}
      >
        {links ? (
          links.map((item, index) => {
            return (
              <li
                key={index}
                style={{
                  borderBottom: check
                    ? "1.5px solid rgba(255, 255, 255, 0.12)"
                    : "1.5px solid rgb(223, 225, 252)",
                }}
              >
                <a href={item.url}>
                  {/* Icon */}
                  <Typography
                    fontFamily="Poppins"
                    variant="subtitle1"
                    component="h5"
                    fontWeight="medium"
                    fontSize={{ xs: "13px", sm: "14px" }}
                    color={"primary"}
                  >
                    {item.type}
                  </Typography>
                  {/* Icon */}
                  <Typography
                    fontFamily="Poppins"
                    variant="subtitle1"
                    fontWeight="bold"
                    component="h5"
                    fontSize={{ xs: "13px", sm: "14px" }}
                    color={check ? "#fff" : "primary"}
                  >
                    {item.name}
                  </Typography>
                </a>
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

export default LinksCoin;
