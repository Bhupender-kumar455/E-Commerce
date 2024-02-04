import Login from "./component/Login";
import Signup from "./component/Signup";
import Home from "./component/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Men from "./component/Men";
import Women from "./component/Women";
import Cart from "./component/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
