import { useContext } from "react";
import CartProduct from "./CartItem";
import ShopContext from "../../Context/ShopContext";

const Cart = () => {
  const { cartItems } = useContext(ShopContext);

  const totalAmount =
    cartItems.length &&
    cartItems.reduce(
      (amount, cartIt) => amount + cartIt.product.price * cartIt.productCount,
      0
    );

  return (
    <>
      {cartItems.length && (
        <p style={{ fontSize: "1.8rem", margin: "1rem", color: "#F5B700" }}>
          <i>Total Amount: {totalAmount.toFixed(2)}</i>
        </p>
      )}
      <div className="itemsHolder" style={{ marginTop: "1rem" }}>
        {cartItems.length > 0 ? (
          cartItems.map((cartIt) => (
            <CartProduct key={cartIt.product.id} cartItem={cartIt} />
          ))
        ) : (
          <h2>There are no items in the cart at the moment!</h2>
        )}
      </div>
    </>
  );
};

export default Cart;
