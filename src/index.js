import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
import { calendlyUrl } from "./tools/constants";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Redirect from "./components/Redirect";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="meeting" element={<Redirect url={calendlyUrl} />} />
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
