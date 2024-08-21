import React, { createContext, useContext, useEffect, useState } from "react";
import { ShoppingCart } from "./ShoppingCart";
import { FavoritCart } from "./FavoritCart";
import StoreItems from "../Data/StoreItems.json";

const ShoppingContext = createContext({});

const initialCartItem = localStorage.getItem("shoppingCart")
  ? JSON.parse(localStorage.getItem("shoppingCart"))
  : [];

const initialFavorit = localStorage.getItem("favorit")
  ? JSON.parse(localStorage.getItem("favorit"))
  : []; 

export const ShoppingCartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState(initialCartItem);
  const [favoriteItems, setFavoriteItems] = useState(initialFavorit);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenFavorit, setIsOpenFavorit] = useState(false);

  useEffect(() => {
    localStorage.setItem("shoppingCart", JSON.stringify(cartItem));
  }, [cartItem]);

  useEffect(() => {
    localStorage.setItem("favorit", JSON.stringify(favoriteItems));
  }, [favoriteItems]);

  const getItemsQuantite = (id) => {
    return cartItem.find((item) => item.id === id)?.quantity || 0;
  };

  const affichierCartItem = () => {
    return cartItem.map((item) =>
      console.log("id:", item.id, "quantity:", item.quantity)
    );
  };

  const increaseCartQuantite = (id) => {
    setCartItem((cartitem) => {
      if (cartitem.find((item) => item.id === id) == null) {
        return [...cartitem, { id: id, quantity: 1 }];
      } else {
        return cartitem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseCartQuantite = (id) => {
    setCartItem((cartitem) => {
      if (cartitem.find((item) => item.id === id)?.quantity === 1) {
        return cartitem.filter((item) => item.id !== id);
      } else {
        return cartitem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItem((cartitem) => {
      return cartitem.filter((item) => item.id !== id);
    });
  };

  const openCart = () => {
    setIsOpen(true);
  };
  const closeCart = () => {
    setIsOpen(false);
  };
  const cartQuantity = cartItem.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const TotalePrice = () => {
    let totalPrice = 0;
    cartItem.forEach((item) => {
      const storeItem = StoreItems.find((x) => x.id === item.id);
      if (storeItem && storeItem.price != null) {
        totalPrice += storeItem.price * item.quantity;
      }
    });
    return totalPrice;
  };

  const AjoutFavorit = (id) => {
    setFavoriteItems((favorit) => {
      if (favorit.find((item) => item.id === id) == null) {
        return [...favorit, { id: id }];
      } else {
        return favorit;
      }
    });
  };

  const openFavorit = () => {
    setIsOpenFavorit(true);
  };
  const closeFavorit = () => {
    setIsOpenFavorit(false);
  };

  const removeFromFavorit = (id) => {
    setFavoriteItems((favorit) => {
      return favorit.filter((item) => item.id !== id);
    });
  };

  return (
    <ShoppingContext.Provider
      value={{
        cartItem,
        getItemsQuantite,
        increaseCartQuantite,
        decreaseCartQuantite,
        removeFromCart,
        affichierCartItem,
        closeCart,
        openCart,
        cartQuantity,
        TotalePrice,
        AjoutFavorit,
        favoriteItems,
        closeFavorit,
        openFavorit,
        removeFromFavorit,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
      <FavoritCart isOpenFavorit={isOpenFavorit} />
    </ShoppingContext.Provider>
  );
};

export const useShoppingContext = () => {
  return useContext(ShoppingContext);
};
