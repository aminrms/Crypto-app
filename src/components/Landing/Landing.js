import React from "react";
import CoinLists from "./CoinsLists/CoinLists";
import Highlights from "./Highlights/Highlights";
import NewsCrypto from "./NewsCrypto/NewsCrypto";

const Landing = ({ check, change }) => {
  return (
    <div>
      <NewsCrypto check={check} change={change} />
      <Highlights check={check} change={change} />
      <CoinLists check={check} change={change} />
    </div>
  );
};

export default Landing;
