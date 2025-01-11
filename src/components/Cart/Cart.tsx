import { useContext } from "react";
import "./Cart.css";
import CartProduct from "./CartItem";
import ShopContext from "../../Context/ShopContext";

const Cart = () => {
  const { cartItems } = useContext(ShopContext);

  return (
    <div className="itemsHolder">
      {cartItems.map((cartIt) => (
        <CartProduct key={cartIt.product.id} cartItem={cartIt} />
      ))}
    </div>
  );
};

export default Cart;
