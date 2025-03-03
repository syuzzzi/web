import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { StatusBar } from "expo-status-bar";
import Navigation from "./navigations";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <Navigation />
    </ThemeProvider>
  );
};

export default App;
