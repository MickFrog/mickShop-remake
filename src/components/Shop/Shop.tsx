import Product from "./Product";
import "./Shop.css";
import products from "./products.json";

const computer_parts = products.computer_parts;

const Shop = () => {
  return (
    <div className="itemsHolder">
      {computer_parts.map((pdt) => (
        <Product key={pdt.id} product={pdt} />
      ))}
    </div>
  );
};

export default Shop;
