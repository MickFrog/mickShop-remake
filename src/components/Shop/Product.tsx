import "./Product.css";

type Product = {
  id: string;
  name: string;
  description: string;
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
      <button>Buy</button>
    </div>
  );
};

export default Product;
