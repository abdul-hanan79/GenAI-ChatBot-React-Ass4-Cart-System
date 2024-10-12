// CartContext.js
"use client";
import React, { createContext, useContext, useState } from "react";

// Create Context for Auth and Cart
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // States to handle auth and cart
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const [cart, setCart] = useState([]);

  // Login function
  const login = (userData) => {
    setUserDetails(userData);

    setIsAuthenticated(true);
  };

  // Logout function
  const logout = () => {
    setIsAuthenticated(false);
    setUserDetails({});
    setCart([]);
  };

  // Add product to cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };
  const removeFromCart = (id) => {
    const filter = cart.filter((item) => item.id != id);
    setCart(filter);
  };
  return (
    <CartContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        cart,
        addToCart,
        userDetails,
        setUserDetails,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
