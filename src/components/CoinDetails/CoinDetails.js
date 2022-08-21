import React, { useContext, useEffect, useState } from "react";
import { Link, Route, Switch, useParams, useHistory } from "react-router-dom";
import axios from "axios";
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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
// Context
import { CryptoContextProvider } from "../../Context/CryptoContextProvider";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import LineChart from "./LineChart/LineChart";
import "../CoinDetails/LineChart/LineChartStyle.css";
import {
  getCoinDetails,
  getCoinExchanges,
  getCoinMarkets,
} from "../../Api/api";
import ToolbarCoinData from "./ToolbarCoin/ToolbarCoinData";
// Components
import CoinInfo from "./CoinInfo/CoinInfo";
import Loader from "../Loader/Loader";

const CoinDetails = ({ check, change }) => {
  const Coins = useContext(CryptoContextProvider);
  const params = useParams();
  const CurrentCoin = Coins[params.uuid - 1];
  const [currentHistory, setCurrentHistory] = useState({});
  const [timePeriod, setTimePeriod] = useState("3h");
  const [coinDetail, setCoinDetail] = useState({});
  const [coinExchanges, setCoinExchanges] = useState({});
  const [coinMarkets, setCoinMarkets] = useState({});
  console.log(coinExchanges)
  useEffect(() => {
    axios
      .get(
        `https://coinranking1.p.rapidapi.com/coin/${
          CurrentCoin ? CurrentCoin.uuid : "Qwsogvtv82FCd"
        }/history`,
        {
          params: {
            referenceCurrencyUuid: "yhjMzLPhuIDl",
            timePeriod: timePeriod,
          },
          headers: {
            "X-RapidAPI-Key":
              "17f885e099mshd881a219fafa7ebp150078jsn68c74ddc461c",
            "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
          },
        }
      )
      .then((response) => setCurrentHistory(response?.data?.data));
    const fetchAPICoinDetails = async () => {
      setCoinDetail(
        await getCoinDetails(CurrentCoin ? CurrentCoin.uuid : "Qwsogvtv82FCd")
      );
    };
    const fetchAPICoinExchanges = async () => {
      setCoinExchanges(
        await getCoinExchanges(
          CurrentCoin ? CurrentCoin.uuid : "Qwsogvtv82FCd",
          "5"
        )
      );
    };
    const fetchAPICoiMarkets = async () => {
      setCoinMarkets(
        await getCoinMarkets(
          CurrentCoin ? CurrentCoin.uuid : "Qwsogvtv82FCd",
          "5"
        )
      );
    };
    fetchAPICoinExchanges();
    fetchAPICoiMarkets();
    fetchAPICoinDetails();
  }, [timePeriod, CurrentCoin, coinDetail]);
  const ButtonGroupData = [
    {
      name: "24h",
      icon: <ExpandMoreIcon />,
      id: 2,
      select: [
        {
          menuItem: "3h",
        },
        {
          menuItem: "24h",
        },
        {
          menuItem: "7d",
        },
        {
          menuItem: "30d",
        },
        {
          menuItem: "3m",
        },
        {
          menuItem: "1y",
        },
        {
          menuItem: "5y",
        },
      ],
    },
    {
      name: "",
      id: 4,
      ic: <FavoriteBorder />,
      iconFill: <Favorite sx={{ color: "red" }} />,
    },
    {
      name: "",
      id: 5,
      ic: <ShareIcon />,
      iconFill: <ShareIcon sx={{ color: "#222" }} />,
    },
  ];
  const selectChangeHandler = (event) => {
    setTimePeriod(event.target.value);
  };

  const history = useHistory();
  return (
    <>
      {CurrentCoin ? (
        <>
          <Container maxWidth="xl" sx={{ minHeight: "200vh" }}>
            <Toolbar
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Box
                sx={{
                  // flexGrow: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Typography
                  variant="subtitle2"
                  component="h6"
                  color="textSecondary"
                  fontSize={{ xs: "12px", sm: "14px" }}
                >
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "#666",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    to="/"
                  >
                    Coins{" "}
                    <ExpandMoreIcon sx={{ transform: "rotate(-90deg)" }} />
                  </Link>
                </Typography>

                <Typography
                  variant="subtitle2"
                  component="h6"
                  sx={{ ml: 1 }}
                  fontSize={{ xs: "12px", sm: "14px" }}
                >
                  <Link
                    style={{
                      textDecoration: "none",
                      color: CurrentCoin.color,
                    }}
                    to={`/coin/${params.uuid}`}
                  >
                    {CurrentCoin.name}
                  </Link>
                </Typography>
              </Box>
              <Box>
                <ButtonGroup
                  variant="outlined"
                  aria-label="outlined button group"
                >
                  {ButtonGroupData.map((btn, index) => {
                    return btn.select ? (
                      <Select
                        key={index}
                        sx={{
                          width: { xs: "100%", md: "80px" },
                          height: { xs: "35px", md: "35px" },
                          outline: "none",
                        }}
                        value={timePeriod}
                        onChange={selectChangeHandler}
                      >
                        {btn.select.map((item, index) => {
                          return (
                            <MenuItem key={index} value={item.menuItem}>
                              {item.menuItem}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    ) : (
                      <Button
                        key={btn.id}
                        className="btn"
                        sx={{
                          textTransform: "unset",
                          padding: "0.2rem ,1rem !important",
                          width: { xs: "100%", md: "80px" },
                          height: { xs: "35px", md: "35px" },
                          display: "flex",
                          alginItems: "center",
                          justifyContent: "center",
                          border: "1px solid #ccc",
                        }}
                      >
                        {btn.name}
                        {btn.icon ? (
                          btn.icon
                        ) : (
                          <Checkbox
                            icon={btn?.ic}
                            checkedIcon={btn?.iconFill}
                          />
                        )}
                      </Button>
                    );
                  })}
                </ButtonGroup>
              </Box>
            </Toolbar>
            <Container maxWidth="xl">
              <ToolbarCoinData
                history={history.location.pathname}
                coinPrice={coinDetail?.price}
                changePrice={currentHistory.change}
                coinName={CurrentCoin.name}
                coinSymbol={CurrentCoin.symbol}
                coinRank={CurrentCoin.rank}
                coinIcon={CurrentCoin.iconUrl}
                rank={CurrentCoin.rank}
                ExchangeNumber={coinDetail?.numberOfExchanges}
                MarketsNumber={coinDetail?.numberOfMarkets}
                check={check}
                change={change}
              />
            </Container>
            <>
           

              <Route
                path="/coin"
                render={() => (
                  <CoinInfo
                    currentHistory={currentHistory}
                    coinDetail={coinDetail}
                    CurrentCoin={CurrentCoin}
                    coinExchanges={coinExchanges}
                    coinMarkets={coinMarkets}
                    check={check}
                    change={change}
                  />
                )}
              />
            </>
          </Container>
        </>
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Loader />
        </Box>
      )}
    </>
  );
};

export default CoinDetails;
