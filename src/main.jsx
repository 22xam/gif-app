import React from "react";
import ReactDOM from "react-dom/client";
import "bulma/css/bulma.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Login />
    <Footer />
  </React.StrictMode>
);
