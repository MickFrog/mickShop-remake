import { useContext } from "react";
import Product from "./Product";
import "./Shop.css";
import ShopContext from "../../Context/ShopContext";

const Shop = () => {
  const { products } = useContext(ShopContext);

  return (
    <div className="itemsHolder">
      {products.map((pdt) => (
        <Product key={pdt.id} product={pdt} />
      ))}
    </div>
  );
};

export default Shop;
