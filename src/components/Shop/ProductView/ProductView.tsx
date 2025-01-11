import { Link, useParams } from "react-router";
import "./ProductView.css";
import { useContext } from "react";
import ShopContext from "../../../Context/ShopContext";

const ProductView = () => {
  const { pdtID } = useParams();
  const { products } = useContext(ShopContext);

  const viewingProduct = products.filter((pdt) => pdt.id === pdtID);

  return (
    <>
      {viewingProduct.length < 1 ? (
        <h2>
          The product with id, "{pdtID}" does not exist. Go back to home{" "}
          <Link to="/">here!</Link>
        </h2>
      ) : (
        <div className="pdtDesc">
          <div>
            <img
              className="pdtViewImg"
              src={`./productImages/${viewingProduct[0].id}.svg`}
              alt="product_Image"
            />
          </div>
          <div>
            <p style={{ fontSize: "1.6rem" }}>
              {viewingProduct[0].description}
            </p>
            <button>Add to cart</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductView;
