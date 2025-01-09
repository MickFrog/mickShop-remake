import { useParams } from "react-router";
import "./ProductView.css";

const ProductView = () => {
  const { pdtID } = useParams();
  return (
    <>
      <div>{pdtID}</div>
      <div>Product view is here for details about the product</div>
    </>
  );
};

export default ProductView;
