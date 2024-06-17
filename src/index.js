import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./utils/Context";
import App from "./App";
import "./index.css";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <AppProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppProvider>
);
