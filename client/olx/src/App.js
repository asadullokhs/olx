import { useInfoContext } from "./context/Context";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  const currentUser = useInfoContext();
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={!currentUser ? <Home /> : <Auth />} />
      </Routes>
    </div>
  );
}

export default App;
