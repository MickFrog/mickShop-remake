import { createContext } from "react";
import { Product } from "../components/Shop/Product";

export type CartItem = {
  product: Product;
  productCount: number;
};

type ShopContextProps = {
  products: Array<Product>;
  cartItems: Array<CartItem>;
  addToCart: (action: number) => void;
};

const ShopContext = createContext<ShopContextProps>({
  products: [],
  cartItems: [],
  addToCart: () => {},
});

export default ShopContext;
