import { Link } from "react-router";
import "./Product.css";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
};

type ProductProps = {
  product: Product;
};

const Product = ({ product }: ProductProps) => {
  return (
    <div className="pdtContainer">
      <div>
        <img
          className="pdtImage"
          src={`./productImages/${product.id}.svg`}
          alt="product_image"
        />
      </div>
      <p style={{ margin: "0 0.2rem" }}>{product.name}</p>
      <p style={{ margin: "0 0.2rem", color: "#F5B700" }}>
        <b>
          <i>{product.price}</i>
        </b>
      </p>
      <Link to={`/shop/${product.id}`}>
        <button className="buyButton">Buy</button>
      </Link>
    </div>
  );
};

export default Product;
