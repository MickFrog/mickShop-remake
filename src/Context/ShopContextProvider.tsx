import { ReactNode, useState } from "react";
import products from "../components/Shop/products.json";
import ShopContext, { CartItem } from "./ShopContext";
import { Product } from "../components/Shop/Product";

const computer_parts = products.computer_parts;

const ShopContextProvider = ({ children }: { children: ReactNode }) => {
  const myProducts: Array<Product> = computer_parts;
  const [cartItems, setCartItems] = useState<Array<CartItem>>([]);

  const addToCart = (working_id: string) => {
    // check whether the product is exists in cart
    const filtered_product = cartItems.find((cartIt: CartItem) => {
      return cartIt.product.id === working_id;
    });

    if (filtered_product) {
      const newCartItems = cartItems.map((cartItem: CartItem) => {
        if (cartItem.product.id === working_id) {
          cartItem.productCount++;
        }

        return cartItem;
      });

      setCartItems(newCartItems);
      return;
    }

    //product is new to the cart
    const foundProduct = myProducts.find(
      (pdt: Product) => pdt.id === working_id
    );

    const newCart = [
      ...cartItems,
      {
        product: foundProduct,
        productCount: 1,
      } as CartItem,
    ];

    setCartItems(newCart);
  };

  const removeCartItem = (working_id: string) => {
    if (cartItems.length < 1) return; //prevent deletion on empty cart

    // check whether the product is exists in cart
    const filtered_cartItem = cartItems.find((cartIt: CartItem) => {
      return cartIt.product.id === working_id;
    });

    if (filtered_cartItem && filtered_cartItem?.productCount > 1) {
      const newCartItems = cartItems.map((cartItem: CartItem) => {
        if (cartItem.product.id === working_id) {
          cartItem.productCount--;
        }

        return cartItem;
      });

      setCartItems(newCartItems);
    } else if (filtered_cartItem && filtered_cartItem.productCount === 1) {
      const newCartItems = cartItems.filter(
        (cartIt: CartItem) => cartIt.product.id !== working_id
      );

      setCartItems(newCartItems);
    }
  };

  const clearCart = () => {
    if (cartItems.length < 1) return;

    setCartItems([]);
  };

  return (
    <ShopContext.Provider
      value={{
        products: myProducts,
        cartItems,
        addToCart,
        removeCartItem,
        clearCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
