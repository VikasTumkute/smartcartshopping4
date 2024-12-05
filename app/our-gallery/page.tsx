"use client";
import React, { useState } from "react";

// Define the Product interface
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const SmartCartShoppingGallery: React.FC = () => {
  const products: Product[] = [
    { id: 1, name: "Wireless Headphones", price: 150, image: "/image/headphones.avif", quantity: 1 },
    { id: 2, name: "Smartphone 5G", price: 999, image: "/image/phone12.jfif", quantity: 1 },
    { id: 3, name: "Laptop Stand", price: 35, image: "/image/laptop12.jfif", quantity: 1 },
    { id: 4, name: "Bluetooth Speaker", price: 99, image: "/image/blue123.jfif", quantity: 1 },
  ];

  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) =>
      prev.some((item) => item.id === product.id)
        ? prev.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
        : [...prev, { ...product }]
    );
  };

  const updateQuantity = (id: number, action: "increase" | "decrease") => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + (action === "increase" ? 1 : -1)) }
          : item
      )
    );
  };

  const removeFromCart = (id: number) => setCart((prev) => prev.filter((item) => item.id !== id));

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="container">
      <h1>Our Gallery</h1>
      <div className="gallery">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button className="add-to-cart" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. Add some items to proceed.</p>
      ) : (
        <div className="cart">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div>
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item.id, "decrease")}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, "increase")}>+</button>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="remove-item">
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <p>Total Price: ${totalPrice}</p>
            <button className="checkout-button">Checkout</button>
          </div>
        </div>
      )}
      <WhyChooseUs />
      <style jsx>{`
        .container {
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        h1, h2 {
          text-align: center;
        }
        .gallery {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin: 20px 0;
        }
        .product-card {
          background: white;
          padding: 20px;
          text-align: center;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .product-image {
          max-width: 100%;
        }
        .add-to-cart {
          background-color: #0070f3;
          color: white;
          border: none;
          padding: 10px;
          border-radius: 4px;
          cursor: pointer;
        }
        .cart {
          margin: 20px 0;
        }
        .cart-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        .cart-item-image {
          width: 100px;
        }
        .quantity-controls button {
          background-color: #0070f3;
          color: white;
          border: none;
          padding: 5px;
          border-radius: 4px;
        }
        .checkout-button {
          background-color: #28a745;
          color: white;
          border: none;
          padding: 10px;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

const WhyChooseUs: React.FC = () => (
  <div style={{ backgroundColor: "#f9f9f9", padding: "20px", textAlign: "center" }}>
    <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>Why Choose Us</h2>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px", maxWidth: "800px", margin: "0 auto" }}>
      {[
        { title: "Trusted By SMEs, CORPORATEs, BRANDS", text: "We can customize the products with company name, logo, numbers, colors as per requirements." },
   
        { title: "Premium Quality At Low Price", text: "We offer the best quality T-shirts, gifts, and printing services at the lowest prices." },
        { title: "One Stop Solutions", text: "We cater to all brand communication solutions effectively under one roof." },
        { title: "99% Satisfied Customers!", text: "Our customers always come back due to our excellent services nationwide." },
      ].map((item, idx) => (
        <div key={idx} style={{ backgroundColor: "#ff3b6c", color: "#fff", padding: "20px", borderRadius: "8px" }}>
          <h3 style={{ fontSize: "1.2rem" }}>{item.title}</h3>

      

          <p>{item.text}</p>
        </div>
      ))}
    </div>
    <div style={{ position: "fixed", bottom: "20px", right: "20px", backgroundColor: "#ff3b6c", color: "#fff", borderRadius: "50%", width: "50px", height: "50px", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }}>
      <a href="mailto:info@example.com" style={{ color: "#fff", textDecoration: "none" }}>✉</a>
    </div>
  </div>
);
export default SmartCartShoppingGallery;