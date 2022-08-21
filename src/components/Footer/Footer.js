import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import { Typography, Container } from "@mui/material";
import "./FooterStyle.css";

const Footer = ({ check, change }) => {
  return (
    <footer
      style={{
        boxShadow: check ? "none" : "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="subtitle2" component="div">
          ©Created by{" "}
          <Typography variant="subtitle2" component="span" color="primary">
            Amin_Ramezani
          </Typography>
        </Typography>
        <Typography
          variant="subtitle"
          component={"h4"}
          title="my-email"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <EmailIcon sx={{ color: "rgb(18, 89, 241)" }} />
          <a
            href="mailto:amin.ramezani.7582@gmail.com"
            className="my-email"
            style={{ color: check ? "#666" : "#888" }}
          >
            <Typography
              variant="p"
              component={"p"}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              amin.ramezani.7582@gmail.com
            </Typography>
          </a>
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
