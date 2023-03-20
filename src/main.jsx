import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Navbar } from "./components/common/Navbar";
import { Footer } from "./components/common/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Footer />
  </React.StrictMode>
);
