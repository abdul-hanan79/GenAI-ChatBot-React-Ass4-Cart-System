import React from "react";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { isAuthenticated, userDetails, cart, logout } = useCartContext();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          My Shop
        </Link>
        <div className="navbar-items">
          {isAuthenticated ? (
            <>
              <span className="welcome-text">Welcome, {userDetails.email}</span>
              <button onClick={logout} className="logout-btn">
                Logout
              </button>
              <Link to="/account link">
                <button className="login-btn">Account</button>
              </Link>
              <Link to="/cart" className="cart-link link">
                <span className="cart-text">Cart ({cart.length})</span>
              </Link>
            </>
          ) : (
            <Link to="/login" className="link">
              <button className="login-btn">Login</button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
