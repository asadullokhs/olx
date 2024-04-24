import React from "react";
import { useInfoContext } from "./context/Context";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import Test from "./pages/Auth/Test";
import Settings from "./pages/Settings/Set";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const App = () => {
  const { currentUser } = useInfoContext();
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={currentUser ? <Home /> : <Auth />} />
          <Route path="/test" element={<Test />} />
          <Route path="/settings" element={ <Settings />} />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
};  

export default App;
