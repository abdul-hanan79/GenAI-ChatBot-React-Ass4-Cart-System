import React from "react";
import { useCartContext } from "../context/CartContext";

export default function Navbar() {
  const { isAuthenticated, userDetails, cart, logout } = useCartContext();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-brand">
          My Shop
        </a>
        <div className="navbar-items">
          {isAuthenticated ? (
            <>
              <span className="welcome-text">Welcome, {userDetails.email}</span>
              <button onClick={logout} className="logout-btn">
                Logout
              </button>
              <a href="/cart" className="cart-link">
                <span className="cart-text">Cart ({cart.length})</span>
              </a>
            </>
          ) : (
            <button className="login-btn">Login</button>
          )}
        </div>
      </div>
    </nav>
  );
}
