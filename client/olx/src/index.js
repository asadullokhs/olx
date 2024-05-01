import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { InfoProvider } from "./context/Context";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <InfoProvider>
    <GoogleOAuthProvider clientId="169889383935-j3a63hj1cv6bsca80knlvfc6924l43l2.apps.googleusercontent.com">
      <App />
      <ToastContainer />
    </GoogleOAuthProvider>
  </InfoProvider>
);
