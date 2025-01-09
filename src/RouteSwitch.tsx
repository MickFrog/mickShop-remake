import { BrowserRouter, Link, Route, Routes } from "react-router";
import App from "./components/Home/App";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";
import ProductView from "./components/Shop/ProductView/ProductView";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <div>
        <p>My other links</p>
        <Link to="/shop">My Shop</Link>
        <br />
        <Link to="/cart">Cart Items</Link>
      </div>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:pdtID" element={<ProductView />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
