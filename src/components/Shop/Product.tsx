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
      <p>Image here</p>
      <p>{product.name}</p>
      <p>Cart items so far here</p>
    </div>
  );
};

export default Product;
