import { BrowserRouter, Route, Routes } from "react-router";
import App from "./components/Home/App";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";
import ProductView from "./components/Shop/ProductView/ProductView";
import Header from "./components/Home/Header";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Header />

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
