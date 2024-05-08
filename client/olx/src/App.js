import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useInfoContext } from "./context/Context";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import Settings from "./pages/Settings/Set";
import AddProd from "./pages/AddProd/AddProd";
import Announce from "./pages/Announce/Announce";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Prod from "./pages/OneProd/Prod";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Message from "./pages/Message/Message";

const App = () => {
  const { currentUser } = useInfoContext();
  return (
    <Router>
      <div className="app">
        <Navbar/>
        <Routes>
          <Route path="/" element={currentUser ? <Home /> : <Auth />} />
          <Route
            path="/settings"
            element={currentUser ? <Settings /> : <Auth />}
          />
          <Route path="/prod/:id" element={<Prod />} />
          <Route path="/add-prod" element={<AddProd />} />
          <Route path="/announce" element={<Announce />} />
          <Route path="/message" element={< Message/>} />
        </Routes>
        <Footer/>
      </div>

    </Router>
  );
};

export default App;
