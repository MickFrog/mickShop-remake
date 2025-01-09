import { Link } from "react-router";
import "./Header.css";

const Header = () => {
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
          <button>Cart</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
