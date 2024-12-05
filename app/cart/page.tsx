"use client";

import { useState } from 'react';

type CartItem = {
  id: number;
  name: string;
  price: number;
  discount: number;
  quantity: number;
  image: string; // Add image field for the product image URL
};

const Cart = () => {
  // Example cart items
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'saree',
      price: 699,
      discount: 400,
      quantity: 1,
      image: '/image/silk.jpg', // Image path for this item
    },
    {
      id: 2,
      name: 't-shirts',
      price: 999,
      discount: 200,
      quantity: 2,
      image: '/image/t-shirts.jpg', // Image path for this item
    },
  ]);

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return; // Ensure quantity doesn't go below 1
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) =>
        total + (item.price - item.discount) * item.quantity,
      0
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="item-details">
              <h2>{item.name}</h2>
              <p>Price: ₹{item.price}</p>
              <p>Discount: ₹{item.discount}</p>
              <p>
                Total: ₹{(item.price - item.discount) * item.quantity}
              </p>
            </div>
            <div className="quantity-controls">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                disabled={item.quantity <= 1}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                +
              </button>
            </div>
            <button onClick={() => removeItem(item.id)} className="remove-item">
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total: ₹{calculateTotal()}</h3>
        <button className="place-order">Place Order</button>
        <button className="clear-cart" onClick={clearCart}>
          Clear Cart
        </button>
      </div>

      <style jsx>{`
        .cart-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 20px;
        }

        .cart-items {
          width: 80%;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .cart-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #ccc;
          padding: 10px;
          width: 100%;
        }

        .cart-item-image {
          width: 50px;
          height: auto;
          margin-right: 20px;
        }

        .item-details {
          flex-grow: 1;
          margin-right: 20px;
        }

        .quantity-controls {
          display: flex;
          align-items: center;
        }

        .quantity-controls button {
          margin: 0 5px;
          padding: 5px 10px;
          background-color: #black;
          border: 1px solid #ccc;
          cursor: pointer;
        }

        .quantity-controls button:hover {
          background-color: #ddd;
        }

        .cart-summary {
          margin-top: 20px;
          font-size: 20px;
        }

        .place-order, .clear-cart {
          padding: 10px;
          background-color: #ff5722;
          color: white;
          border: none;
          cursor: pointer;
          font-size: 18px;
          margin-right: 10px;
        }

        .place-order:hover, .clear-cart:hover {
          background-color: #e64a19;
        }

        .remove-item {
          background-color: red;
          color: white;
          border: none;
          padding: 5px 10px;
          cursor: pointer;
        }

        .remove-item:hover {
          background-color: darkred;
        }

        @media (max-width: 768px) {
          .cart-container {
            width: 100%;
            padding: 10px;
          }

          .cart-items {
            width: 100%;
          }

          .cart-item {
            flex-direction: column;
            align-items: flex-start;
          }

          .item-details {
            margin-right: 0;
          }

          .quantity-controls {
            margin-top: 10px;
          }

          .cart-summary {
            text-align: center;
          }

          .place-order,
          .clear-cart {
            width: 100%;
            margin-top: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default Cart;