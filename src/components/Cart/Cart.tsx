import { useContext } from "react";
import CartProduct from "./CartItem";
import ShopContext from "../../Context/ShopContext";

const Cart = () => {
  const { cartItems } = useContext(ShopContext);

  return (
    <div className="itemsHolder">
      {cartItems.length > 0 ? (
        cartItems.map((cartIt) => (
          <CartProduct key={cartIt.product.id} cartItem={cartIt} />
        ))
      ) : (
        <h2>There are no items in the cart at the moment!</h2>
      )}
    </div>
  );
};

export default Cart;
