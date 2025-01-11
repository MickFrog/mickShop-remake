import { HashRouter, Route, Routes } from "react-router";
import App from "./components/Home/App";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";
import ProductView from "./components/Shop/ProductView/ProductView";
import Header from "./components/Home/Header";
import Footer from "./components/Home/Footer";

const RouteSwitch = () => {
  return (
    <HashRouter>
      <Header />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:pdtID" element={<ProductView />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </HashRouter>
  );
};

export default RouteSwitch;
