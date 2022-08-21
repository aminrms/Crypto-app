import React from 'react';
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
} from "@mui/material";
// Components
import ValueStatistics from '../ValueStatistic/ValueStatistics';
import SupplyInfo from '../SupplyInfo/SupplyInfo';
import Description from '../CoinDescription/Description';
import LinksCoin from '../LinksCoin/LinksCoin';
import CoinExchange from '../CoinMarketsAndExchanges/CoinExchangeSection';
import CoinMarkets from '../CoinMarketsAndExchanges/CoinMarketsSection';
import LineChart from '../LineChart/LineChart';
const CoinInfo = ({currentHistory , coinDetail , CurrentCoin , coinExchanges , coinMarkets , check , change}) => {
    return (
      <>
        <Container maxWidth="xl" className="line-chart">
          <LineChart
            history={currentHistory.history}
            coinPrice={coinDetail?.price}
            changePrice={currentHistory.change}
            coinName={CurrentCoin.name}
            coinSymbol={CurrentCoin.symbol}
            coinRank={CurrentCoin.rank}
            coinIcon={CurrentCoin.iconUrl}
          />
        </Container>
        <Container maxWidth="xl" sx={{ mt: 6 }}>
          <Grid container spacing={2} justifyContent={"center"}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <ValueStatistics
                _24Volume={coinDetail["24hVolume"]}
                allHighPrice={coinDetail?.allTimeHigh?.price}
                allHightPriceTime={coinDetail?.allTimeHigh?.timestamp}
                btcPrice={coinDetail?.btcPrice}
                FullDilutedMarketCap={coinDetail?.fullyDilutedMarketCap}
                price={coinDetail?.price}
                marketCap={coinDetail?.marketCap}
                links={coinDetail?.links}
                rank={coinDetail?.rank}
                name={coinDetail?.name}
                check={check}
                change={change}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <SupplyInfo
                supply={coinDetail?.supply} //Object
                name={coinDetail?.name}
                symbol={coinDetail?.symbol}
                check={check}
                change={change}
              />
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="xl" sx={{ mt: 6 }}>
          <Grid container spacing={2} justifyContent={"center"}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Description
                name={coinDetail?.name}
                description={coinDetail?.description}
                check={check}
                change={change}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <LinksCoin
                links={coinDetail?.links}
                name={coinDetail?.name}
                check={check}
                change={change}
              />
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="xl" sx={{ mt: 6 }}>
          <Grid container spacing={2} justifyContent={"center"}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <CoinExchange
                name={coinDetail?.name}
                exchanges={coinExchanges?.exchanges}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <CoinMarkets
                name={coinDetail?.name}
                markets={coinMarkets?.markets}
              />
            </Grid>
          </Grid>
        </Container>
      </>
    );
};

export default CoinInfo;