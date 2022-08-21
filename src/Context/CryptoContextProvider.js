import axios from "axios";
import React, { useEffect, useState, createContext } from "react";


export const CryptoContextProvider = createContext();
const CryptoContext = ({ children }) => {
  const [cryptos, setCryptos] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const response = await axios.get(
        "https://coinranking1.p.rapidapi.com/coins",
        {
          headers: {
            "X-RapidAPI-Key":
              "851c2e8d29msh8785173d362396bp1931cbjsn5ffe97c9c380",
            "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
          },
          params: {
            referenceCurrencyUuid: "yhjMzLPhuIDl",
            timePeriod: "24h",
            "tiers[0]": "1",
            orderBy: "marketCap",
            orderDirection: "desc",
            limit: "60",
            offset: "0",
          },
        }
      );
      return setCryptos(response?.data?.data?.coins);
    };
    fetchAPI();
  }, []);

  return (
    <CryptoContextProvider.Provider value={cryptos}>
      {children}
    </CryptoContextProvider.Provider>
  );
};
export default CryptoContext;
