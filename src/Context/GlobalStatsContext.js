import React, { createContext, useEffect, useState } from "react";
import { getGlobalStats } from "../Api/api";
export const GlobalStatsContextProvider = createContext();
const GlobalStatsContext = ({ children }) => {
  const [globalStats, setGlobalStats] = useState({});
  useEffect(() => {
    const fetchAPI = async () => {
      setGlobalStats(await getGlobalStats("stats"));
    };
    fetchAPI();
  }, []);
  return (
    <GlobalStatsContextProvider.Provider value={globalStats}>
      {children}
    </GlobalStatsContextProvider.Provider>
  );
};

export default GlobalStatsContext;
