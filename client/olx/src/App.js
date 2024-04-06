import { useInfoContext } from "./context/Context";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";

function App() {
  const currentUser = useInfoContext()
  return <div className="App">
    <Routes>
      <Route path={"/"} element={currentUser ? <Home /> : <Auth />} />
    </Routes>
  </div>;
}

export default App;
