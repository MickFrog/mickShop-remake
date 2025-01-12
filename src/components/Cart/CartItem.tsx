import "./CartItem.css";
import ShopContext, { CartItem } from "../../Context/ShopContext";
import { useContext } from "react";

const CartProduct = ({ cartItem }: { cartItem: CartItem }) => {
  const { addToCart, removeCartItem } = useContext(ShopContext);

  const handleAddToCart = () => {
    addToCart(cartItem.product.id);
  };

  const handleRemoveCartItem = () => {
    removeCartItem(cartItem.product.id);
  };

  return (
    <div className="pdtContainer">
      <div>
        <img
          className="pdtImage"
          src={`./productImages/${cartItem.product.id}.svg`}
          alt="product_image"
        />
      </div>
      <p style={{ margin: "0 0.2rem" }}>{cartItem.product.name}</p>
      <p className="cartItemPrice">
        <i>{cartItem.product.price}</i>
      </p>
      <div className="cartActions">
        <button onClick={handleRemoveCartItem}>-</button>
        <p>{cartItem.productCount}</p>
        <button onClick={handleAddToCart}>+</button>
      </div>
      <p className="cartItemAmount">
        <i>
          Total: {(cartItem.product.price * cartItem.productCount).toFixed(2)}
        </i>
      </p>
    </div>
  );
};

export default CartProduct;
