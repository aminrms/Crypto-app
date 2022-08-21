import React, { useContext, useEffect, useState } from "react";
// Material-Ui
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
// Context
import CryptoContext from "./Context/CryptoContextProvider";
import GlobalStatsContext from "./Context/GlobalStatsContext";
// Components
import Navbar from "./components/Navbar/Navbar";
import "./All.css";
import Landing from "./components/Landing/Landing";
//React-router-dom
import { Route, Router, Switch } from "react-router-dom";
import CoinDetails from "./components/CoinDetails/CoinDetails";
import axios from "axios";
import ScrollToTop from "./ScrollToTop";
import Footer from "./components/Footer/Footer";
import Exchanges from "./components/Exchanges/Exchanges";


const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const theme = createTheme({
    typography: {
      fontFamily: "Poppins",
    },
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "rgb(18, 89, 241)",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CryptoContext>
        <GlobalStatsContext>
          <ScrollToTop />
          <Navbar check={darkMode} change={() => setDarkMode(!darkMode)} />
          <Switch>
            <Route
              path="/coin/:uuid"
              render={() => (
                <CoinDetails
                  check={darkMode}
                  change={() => setDarkMode(!darkMode)}
                />
              )}
            />
            <Route
              exact
              path="/"
              render={() => (
                <Landing
                  check={darkMode}
                  change={() => setDarkMode(!darkMode)}
                />
              )}
            />
          </Switch>
          <Footer check={darkMode} change={() => setDarkMode(!darkMode)} />
        </GlobalStatsContext>
      </CryptoContext>
    </ThemeProvider>
  );
};

export default App;
