import React from "react";
// import "slick-carousel/slick/slick/slick.css"
// import "slick-carousel/slick/slick/slick-them.css"
import { useInfoContext } from "./context/Context";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import Settings from "./pages/Settings/Set";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Prod from "./pages/OneProd/Prod";

const App = () => {
  const { currentUser } = useInfoContext();
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={currentUser ? <Home /> : <Auth />} />
          <Route
            path="/settings"
            element={currentUser ? <Settings /> : <Auth />}
          />
          <Route path="/prod/:id" element={<Prod />} />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
};

export default App;
