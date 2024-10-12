import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    description: "This is a description for Product 1",
    image:
      "https://cdn.shopify.com/s/files/1/0070/7032/files/product-label-design.jpg?v=1680902906",
  },
  {
    id: 2,
    name: "Product 2",
    price: 150,
    description: "This is a description for Product 2",
    image:
      "https://www.befunky.com/images/wp/wp-2018-08-product-photography-18.jpg?auto=avif,webp&format=jpg&width=944",
  },
  {
    id: 3,
    name: "Product 3",
    price: 200,
    description: "This is a description for Product 3",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/024/841/285/small_2x/wireless-headphone-isolated-on-transparent-background-high-quality-bluetooth-headphone-for-advertising-and-product-catalogs-generative-ai-png.png",
  },
];

export default function ProductPage() {
  return (
    <div className="product-container">
      <h2 className="product-title">Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}
