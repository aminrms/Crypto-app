import React, { useContext, useEffect, useState } from "react";
import millify from "millify";
// Context
import { CryptoContextProvider } from "../../../Context/CryptoContextProvider";
// Material-UI
import {
  Container,
  Toolbar,
  Button,
  Box,
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Avatar,
  Skeleton,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Link } from "react-router-dom";
const CoinsLinks = [
  {
    name: "All",
    path: "/",
  },
  {
    name: "Exchange",
    path: "/coins/exchange",
  },
  {
    name: "Favorite",
    path: "/coins/favorite",
  },
  {
    name: "New",
    path: "/coins/new",
  },
  {
    name: "Gainers",
    path: "/coins/gainers",
  },
  {
    name: "Losers",
    path: "/coins/losers",
  },
  {
    name: "Meme",
    path: "/coins/meme",
  },
  {
    name: "NFT",
    path: "/coins/nft",
  },
  {
    name: "DeFi",
    path: "/coins/DeFi",
  },
  {
    name: "Game",
    path: "/coins/game",
  },
  {
    name: "StableCoins",
    path: "/coins/stableCoins",
  },
  {
    name: "Metaverse",
    path: "/coins/metaverse",
  },
];

const CoinLists = ({ check, change }) => {
  const Coins = useContext(CryptoContextProvider);

  const TableHeadData = [
    {
      name: "Price",
    },
    {
      name: "1h%",
    },
    {
      name: "Market Cap",
      decs: "The total market value of a cryptocurrency's circulating supply. It is analogous to the free-float capitalization in the stock market. Market Cap = Current Price x Circulating Supply.",
    },
    {
      name: "Volume(24h)",
      decs: "A measure of how much of a cryptocurrency was traded in the last 24 hours.",
    },
    {
      name: "Last7Days",
    },
  ];
  return (
    <>
      <Container maxWidth="xl">
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
                <TableRow>
                  <TableCell align={"left"}>All Coins</TableCell>
                  {TableHeadData.length ? (
                    TableHeadData.map((data, index) => {
                      return (
                        <TableCell key={index} align={"right"}>
                          {data.name}
                          {data.decs ? "?" : null}
                          {/* {data.decs ? (
                          <div className="info">{data.decs}</div>
                        ) : null} */}
                        </TableCell>
                      );
                    })
                  ) : (
                    <Skeleton
                      variant="rounded"
                      width="1800px"
                      height={"60px"}
                      sx={{ mb: 1 }}
                    />
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {Coins.length
                  ? Coins.map((coin) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={coin.rank}
                          sx={{
                            transition: "all 0.3s ease-in-out",
                            padding: "0 0.5rem",
                          }}
                        >
                          <TableCell align="left" sx={{}}>
                            <Link
                              to={`/coin/${coin.rank}`}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "1rem",
                                textDecoration: "none",
                                maxWidth: "250px",
                              }}
                            >
                              <Avatar
                                src={coin.iconUrl}
                                alt={coin.symbol}
                                sx={{ width: "30px", height: "30px" }}
                              />
                              <Typography
                                variant="subtitle2"
                                component="h5"
                                fontWeight="medium"
                                color={check ? "#fff" : "primary"}
                                // fontSize={"15px"}
                              >
                                {coin.name}
                                <span
                                  style={{
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
                                  {coin.symbol}
                                </span>
                              </Typography>
                            </Link>
                          </TableCell>
                          <TableCell align="right">
                            <Typography
                              variant="h6"
                              component="h6"
                              fontSize={"15px"}
                              fontWeight="500"
                            >
                              $ {Number(coin.price).toLocaleString()}
                            </Typography>
                          </TableCell>
                          <TableCell align="right">
                            <Typography
                              variant="h6"
                              component="h6"
                              fontSize={"15px"}
                              fontWeight="medium"
                              sx={{
                                color: `${coin.change > 0 ? "green" : "red"}`,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-end",
                              }}
                            >
                              {coin.change > 0 ? (
                                <ArrowDropUpIcon sx={{ color: "green" }} />
                              ) : (
                                <ArrowDropDownIcon sx={{ color: "red" }} />
                              )}
                              {coin.change}%
                            </Typography>
                          </TableCell>
                          <TableCell align="right">
                            <Typography
                              variant="h6"
                              component="h6"
                              fontSize={"15px"}
                              fontWeight="medium"
                              color={check ? "#fff" : "primary"}
                            >
                              $ {Number(coin.marketCap).toLocaleString()}
                            </Typography>
                          </TableCell>
                          <TableCell align="right">
                            <Typography
                              variant="h6"
                              component="h6"
                              fontSize={"15px"}
                              fontWeight="medium"
                              color={check ? "#fff" : "primary"}
                            >
                              ${Number(coin["24hVolume"]).toLocaleString()}
                            </Typography>
                          </TableCell>
                          <TableCell
                            align="right"
                            sx={{
                              maxWidth: "200px",
                            }}
                          >
                            <Typography
                              variant="h6"
                              component="h6"
                              fontSize={"14px"}
                              fontWeight="700"
                            >
                              Chart
                            </Typography>
                          </TableCell>
                        </TableRow>
                      );
                    })
                  : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, , 15].map(
                      (item) => {
                        return (
                          <>
                            <TableRow sx={{ width: "100%", mb: 2 }} key={item}>
                              <Skeleton
                                variant="rounded"
                                width="1800px"
                                height={"60px"}
                                sx={{ mb: 1 }}
                              />
                            </TableRow>
                          </>
                        );
                      }
                    )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </>
  );
};

export default CoinLists;
