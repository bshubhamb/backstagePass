import { StrictMode } from "react";
import ReactDOM from "react-dom";
import React from "react";
import ThemeProvider from "./theme/ThemeProvider";
import App from "./App";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <ThemeProvider><App /></ThemeProvider>
  </StrictMode>,
  rootElement
);
