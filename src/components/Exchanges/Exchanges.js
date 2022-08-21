import React, { useContext, useEffect, useState } from "react";
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
  Grid,
  TextField,
  TableRow,
  TableCell,
  Avatar,
  TableBody,
  TableHead,
  Table,
  Paper,
  TableContainer,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
// Css
import "./ExchangesStyle.css";
// API
import { getMarkets, getExchanges } from "../../Api/api";
import axios from "axios";
const Exchanges = ({ check, change }) => {
  const [InputValue, setInputValue] = useState("");
  const [Markets, setMarkets] = useState([]);
  const inputHandler = (event) => {
    setInputValue(event.target.value);
  };
  useEffect(() => {}, []);
  console.log(Markets);
  return (
    <Container maxWidth="xl">
      <Container
        className="input-box"
        sx={{
          display: "fex",
          alignItems: "center",
          justifyContent: "center",
          p: 3,
        }}
      >
        <input type="text" value={InputValue} onChange={inputHandler} />
      </Container>
      <Container maxWidth="xl" sx={{ mt: 6 }}>
        <Paper
          sx={{
            p: 4,
            pl: 5,
            pr: 5,
            boxShadow: check
              ? "none"
              : "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px !important",
            borderRadius: "12px",
          }}
        >
          <TableContainer sx={{ minHeight: "80vh" }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow></TableRow>
              </TableHead>
              <TableBody></TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </Container>
  );
};

export default Exchanges;
