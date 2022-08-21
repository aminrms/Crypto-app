import React from "react";
import axios from "axios";

const BASE_URL = "https://coinranking1.p.rapidapi.com";
const getCoins = async (limit) => {
  const response = await axios.get(
    "https://coinranking1.p.rapidapi.com/coins",
    {
      headers: {
        "X-RapidAPI-Key": "17f885e099mshd881a219fafa7ebp150078jsn68c74ddc461c",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
      params: {
        referenceCurrencyUuid: "yhjMzLPhuIDl",
        timePeriod: "24h",
        "tiers[0]": "1",
        orderBy: "marketCap",
        orderDirection: "desc",
        limit: limit,
        offset: "0",
      },
    }
  );
  return response?.data?.data?.coins;
};
const getCoinDetails = async (uuidKey) => {
  const response = await axios.get(
    `https://coinranking1.p.rapidapi.com/coin/${uuidKey}`,
    {
      params: { referenceCurrencyUuid: "yhjMzLPhuIDl", timePeriod: "24h" },
      headers: {
        "X-RapidAPI-Key": "17f885e099mshd881a219fafa7ebp150078jsn68c74ddc461c",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    }
  );
  return response?.data?.data?.coin;
};
const getGlobalStats = async (query) => {
  const response = await axios.get(`${BASE_URL}/${query}`, {
    params: { referenceCurrencyUuid: "yhjMzLPhuIDl" },
    headers: {
      "X-RapidAPI-Key": "17f885e099mshd881a219fafa7ebp150078jsn68c74ddc461c",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  });
  return response?.data?.data;
};

const getCoinExchanges = async (query, limit) => {
  const response = await axios.get(
    `https://coinranking1.p.rapidapi.com/coin/${query}/exchanges`,
    {
      params: {
        referenceCurrencyUuid: "yhjMzLPhuIDl",
        limit: limit,
        offset: "0",
        orderBy: "24hVolume",
        orderDirection: "desc",
      },
      headers: {
        "X-RapidAPI-Key": "17f885e099mshd881a219fafa7ebp150078jsn68c74ddc461c",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    }
  );
  return response?.data?.data;
};
const getCoinMarkets = async (query, limit) => {
  const response = await axios.get(
    `https://coinranking1.p.rapidapi.com/coin/${query}/markets`,
    {
      params: {
        referenceCurrencyUuid: "yhjMzLPhuIDl",
        limit: limit,
        offset: "0",
        orderBy: "24hVolume",
        orderDirection: "desc",
      },
      headers: {
        "X-RapidAPI-Key": "17f885e099mshd881a219fafa7ebp150078jsn68c74ddc461c",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    }
  );
  return response?.data?.data;
};
const getExchanges = async (limit) => {
  const response = await axios.get(
    "https://coinranking1.p.rapidapi.com/exchanges",
    {
      params: {
        referenceCurrencyUuid: "yhjMzLPhuIDl",
        limit: "50",
        offset: "0",
        orderBy: "24hVolume",
        orderDirection: "desc",
      },
      headers: {
        "X-RapidAPI-Key": "17f885e099mshd881a219fafa7ebp150078jsn68c74ddc461c",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    }
  );
  return response?.data?.data;
};
const getMarkets = async (limit) => {
  const response = await axios.get(
    "https://coinranking1.p.rapidapi.com/markets",
    {
      params: {
        referenceCurrencyUuid: "yhjMzLPhuIDl",
        limit: "5",
        offset: "0",
        orderBy: "24hVolume",
        orderDirection: "desc",
      },
      headers: {
        "X-RapidAPI-Key": "17f885e099mshd881a219fafa7ebp150078jsn68c74ddc461c",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    }
  );
  return response?.data?.data;
};
export {
  getGlobalStats,
  getCoinDetails,
  getCoinMarkets,
  getCoinExchanges,
  getCoins,
  getExchanges,
  getMarkets,
};
