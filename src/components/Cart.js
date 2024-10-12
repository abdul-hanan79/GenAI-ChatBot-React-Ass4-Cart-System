import React from "react";
import { useCartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useCartContext();

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <div className="card">
          <div className="card-content empty-cart">
            <p className="empty-cart-text">Your cart is empty.</p>
            <button className="continue-shopping-btn">Continue Shopping</button>
          </div>
        </div>
      </div>
    );
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-container">
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Your Cart</h3>
        </div>
        <div className="card-content">
          <ul className="cart-items-list">
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <div>
                  <h3 className="item-name">{item.name}</h3>
                  <p className="item-price">${item.price.toFixed(2)}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="remove-item-btn"
                >
                  <span className="sr-only">Remove item</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="card-footer">
          <div className="total-price">Total: ${total.toFixed(2)}</div>
          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
    </div>
  );
}
