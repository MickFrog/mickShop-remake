import { ReactNode, useState } from "react";
import products from "../components/Shop/products.json";
import ShopContext, { CartItem } from "./ShopContext";

const computer_parts = products.computer_parts;

const ShopContextProvider = ({ children }: { children: ReactNode }) => {
  const myProducts = computer_parts;
  const [cartItems, setCartItems] = useState<Array<CartItem>>([]);

  const addToCart = (action: number) => {
    console.log("Action: ", action);
    // we shall have our logic here
  };

  return (
    <ShopContext.Provider
      value={{ products: myProducts, cartItems, addToCart }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
