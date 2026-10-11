import React, { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext();

const getInitialCart = () => {
  const savedCart = localStorage.getItem("audiophile_cart");
  return savedCart ? JSON.parse(savedCart) : [];
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { product, quantity } = action.payload;
      const existingIndex = state.items.findIndex(
        (item) => item.id === product.id,
      );

      if (existingIndex > -1) {
        const updatedItems = [...state.items];
        updatedItems[existingIndex].quantity += quantity;
        return { ...state, items: updatedItems };
      } else {
        return { ...state, items: [...state.items, { ...product, quantity }] };
      }
    }
    case "UPDATE_QUANTITY": {
      const { id, quantity } = action.payload;
      if (quantity <= 0) {
        return {
          ...state,
          items: state.items.filter((item) => item.id !== id),
        };
      }
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === id ? { ...item, quantity } : item,
        ),
      };
    }
    case "CLEAR_CART":
      return { ...state, items: [] };
    default:
      return state;
  }
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: getInitialCart(),
  });

  useEffect(() => {
    localStorage.setItem("audiophile_cart", JSON.stringify(state.items));
  }, [state.items]);

  const addToCart = (product, quantity) => {
    dispatch({ type: "ADD_TO_CART", payload: { product, quantity } });
  };

  const updateQuantity = (id, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = totalPrice > 0 ? 50 : 0;
  const vat = Math.round(totalPrice * 0.2);
  const grandTotal = totalPrice + shipping;

  return (
    <CartContext.Provider
      value={{
        cart: state.items,
        addToCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        shipping,
        vat,
        grandTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
