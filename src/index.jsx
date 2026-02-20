import { StrictMode } from "react";
import ReactDOM from "react-dom";
import React from "react";
import ThemeProvider  from "./themes/theme.jsx";
import App from "./App";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <ThemeProvider><App /></ThemeProvider>
  </StrictMode>,
  rootElement
);
