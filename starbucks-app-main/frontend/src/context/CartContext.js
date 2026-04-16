import React, { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

function toAmount(item) {
  return Number(`${item.price}.${item.paise}`);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addItem(item) {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        return currentItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      return [
        ...currentItems,
        {
          ...item,
          quantity: 1,
          amount: toAmount(item),
        },
      ];
    });
  }

  function removeItem(id) {
    setCartItems((currentItems) =>
      currentItems
        .map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: Math.max(cartItem.quantity - 1, 0) }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0)
    );
  }

  function clearCart() {
    setCartItems([]);
  }

  const value = useMemo(() => {
    const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const subtotal = cartItems.reduce((total, item) => total + item.amount * item.quantity, 0);

    return {
      cartItems,
      itemCount,
      subtotal,
      addItem,
      removeItem,
      clearCart,
    };
  }, [cartItems]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}
