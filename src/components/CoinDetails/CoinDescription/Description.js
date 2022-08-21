import React, { useState } from "react";
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
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "./description.css";
import HtmlReactParsers from "html-react-parser";
const Description = ({ description, name }) => {
  const [showMore, setShowMore] = useState(false);
  const showMoreHandler = () => {
    setShowMore(!showMore);
  };
  return (
    <Container maxWidth={"xl"}>
      <h3 style={{ marginBottom: "0.5rem" }}>What is {name}?</h3>
      <Box className={showMore ? "description show" : "description"}>
        {HtmlReactParsers(String(description))}
      </Box>{" "}
      <Button
        className={showMore ? "showMoreBtn show" : "showMoreBtn"}
        sx={{
          width: "100%",
          borderRadius: "6px",
          color: "#111",
          fontWeight: "bold",
          backgroundColor: "#e9f2ff",
          boxShadow: "unset",
          fontFamily:'Poppins'
        }}
        onClick={showMoreHandler}
        variant="contained"
        
      >
        {showMore ? "Show less" : "Read more"}
        {showMore ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </Button>
    </Container>
  );
};

export default Description;
