import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Header } from "./components/common/Header";
import { Footer } from "./components/common/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>
);
