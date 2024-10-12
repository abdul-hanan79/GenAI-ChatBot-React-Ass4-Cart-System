import React from "react";
import { useCartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart, isAuthenticated } = useCartContext();

  return (
    <div key={product.id} className="product-card">
      <div className="card-header">
        <h3>{product.name}</h3>
      </div>
      <div className="product-image-div">
        <img
          src={product.image}
          className="product-image"
          alt={`product  ${product.id}`}
        />
      </div>
      <div className="card-content">
        <p className="description">{product.description}</p>
        <p className="price">${product.price.toFixed(2)}</p>
      </div>
      <div className="card-footer">
        <button
          onClick={() =>
            isAuthenticated ? addToCart(product) : alert("you are not logined")
          }
          className="add-to-cart-btn"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
