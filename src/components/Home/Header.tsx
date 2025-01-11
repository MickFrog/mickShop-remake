import { Link } from "react-router";
import "./Header.css";
import { useContext } from "react";
import ShopContext from "../../Context/ShopContext";

const Header = () => {
  const { cartItems } = useContext(ShopContext);

  const getTotalCartElements = () => {
    const cartTotalItems = cartItems.reduce(
      (total: number, currItem) => (total += currItem.productCount),
      0
    );

    return cartTotalItems;
  };

  return (
    <div className="headerContainer">
      <Link to="/">
        <h1 className="headingText">REMADE</h1>
      </Link>

      <div className="headerLinksContainer">
        <Link to="/shop">
          <button>Shop</button>
        </Link>
        <Link to="/cart">
          <button className="cartBtn" data-count={getTotalCartElements()}>
            Cart
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
