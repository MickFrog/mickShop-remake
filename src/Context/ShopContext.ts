import { createContext } from "react";
import { Product } from "../components/Shop/Product";

export type CartItem = {
  product: Product;
  productCount: number;
};

type ShopContextProps = {
  products: Array<Product>;
  cartItems: Array<CartItem>;
  addToCart: (id: string) => void;
  removeCartItem: (id: string) => void;
};

const ShopContext = createContext<ShopContextProps>({
  products: [],
  cartItems: [],
  addToCart: () => {},
  removeCartItem: () => {},
});

export default ShopContext;
