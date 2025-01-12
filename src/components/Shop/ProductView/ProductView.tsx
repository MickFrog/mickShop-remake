import { Link, useParams } from "react-router";
import "./ProductView.css";
import { useContext } from "react";
import ShopContext from "../../../Context/ShopContext";

const ProductView = () => {
  const { pdtID } = useParams();
  const { products, addToCart } = useContext(ShopContext);

  const viewingProduct = products.filter((pdt) => pdt.id === pdtID);

  const handleCartAddition = () => {
    addToCart(viewingProduct[0].id);
  };

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
              <u>{viewingProduct[0].name}</u>
            </p>
            <p style={{ fontSize: "1.2rem" }}>
              {viewingProduct[0].description}
            </p>
            <p style={{ fontSize: "1.8rem", color: "#F5B700" }}>
              <b>
                <i>{viewingProduct[0].price}</i>
              </b>
            </p>
            <button onClick={handleCartAddition}>Add to cart</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductView;
