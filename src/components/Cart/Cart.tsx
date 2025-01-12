import { useContext } from "react";
import CartProduct from "./CartItem";
import ShopContext from "../../Context/ShopContext";
import { useNavigate } from "react-router";

const Cart = () => {
  const { cartItems, clearCart } = useContext(ShopContext);
  const navigate = useNavigate();

  const totalAmount =
    cartItems.length &&
    cartItems.reduce(
      (amount, cartIt) => amount + cartIt.product.price * cartIt.productCount,
      0
    );

  const handleCheckout = () => {
    alert(
      `Thank you for shopping at Remade! You spent ${totalAmount.toFixed(
        2
      )} with us today.`
    );

    clearCart();

    navigate("/");
  };

  return (
    <>
      {cartItems.length > 0 && (
        <p style={{ fontSize: "1.8rem", margin: "1rem", color: "#F5B700" }}>
          <i>Total Amount: {totalAmount.toFixed(2)}</i>
        </p>
      )}
      <div className="itemsHolder" style={{ margin: "1rem" }}>
        {cartItems.length > 0 ? (
          cartItems.map((cartIt) => (
            <CartProduct key={cartIt.product.id} cartItem={cartIt} />
          ))
        ) : (
          <h2>There are no items in the cart at the moment!</h2>
        )}
      </div>
      {cartItems.length > 0 && (
        <button
          onClick={handleCheckout}
          style={{ fontSize: "1.6rem", margin: "1rem" }}
        >
          Checkout
        </button>
      )}
    </>
  );
};

export default Cart;
