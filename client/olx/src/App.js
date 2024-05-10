import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useInfoContext } from "./context/Context";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import Settings from "./pages/Settings/Set";
import AddProd from "./pages/AddProd/AddProd";
import Announce from "./pages/Announce/Announce";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Prod from "./pages/OneProd/Prod";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Message from "./pages/Message/Message";

function App() {
  const {currentUser} = useInfoContext()
  const [isSignUp, setIsSignUp] = useState(false)
  const path = useLocation().pathname
  
  useEffect(() => { 
    const rePath = () => {
      if(path === '/add-prod' && !currentUser || path === '/settings' && !currentUser || path === '/announce' && !currentUser ){
        setIsSignUp(true)
      } else {
        setIsSignUp(false)
      }
    }
    rePath()
  }, [path])

  return (
    <>
      <div className="app">
        {!isSignUp && <Navbar/>}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route
            path="/settings"
            element={currentUser ? <Settings /> : <Auth />}
          />
          <Route path="/prod/:id" element={<Prod />} />
          <Route path="/add-prod" element={<AddProd />} />
          <Route path="/announce" element={<Announce />} />
          <Route path="/message" element={< Message/>} />
        </Routes>
        {!isSignUp && <Footer/>}
      </div>

    </>
  );
}

export default App;