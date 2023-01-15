import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { BrowserRouter } from "react-router-dom";
import "tw-elements";
import "lightbox.js-react/dist/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
