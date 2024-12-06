'use client';

import Image from 'next/image';
import Link from 'next/link';

const products = [
  { id: '1', name: 'Headphones', price: '5000', image: '/image/head12.jpg', description: 'High-quality wireless headphones.' },
  { id: '2', name: 'Radio', price: '1500', image: '/image/radio12.jpg', description: 'Vintage-style radio with modern sound quality.' },
  { id: '3', name: 'Child Dress', price: '1200', image: '/image/chi12.webp', description: 'Effortlessly cook your favorite meals with this high-performance fryer.' },
  { id: '4', name: 'Hair Dryer', price: '1200', image: '/image/ele4.jpeg', description: 'Powerful hair dryer with multiple settings.' },
  { id: '5', name: 'Laptop', price: '120000', image: '/image/laptop12.jpg', description: 'Lightweight laptop with long battery life.' },
  { id: '6', name: 'Camera', price: '12000', image: '/image/camera12.jpg', description: 'DSLR camera for professional photography.' },
];

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return <p>Product not found</p>;
  }

  const handleAddToCart = () => {
    console.log(`Added ${product.name} to cart`);
    // Implement cart functionality here
  };

  const handleBuyNow = () => {
    console.log(`Proceeding to buy ${product.name}`);
    // Implement buy functionality here
  };

  return (
    <div className="product-page">
      <Link href="/" aria-label="Back to Home" className="back-home-button">
        <Image src="/image/backicon.jpeg" alt="Back to Home" width={40} height={40} />
      </Link>
      <h1>{product.name}</h1>
      <Image src={product.image} alt={product.name} width={400} height={400} />
      <p className="price">₹{product.price}</p>
      <p className="description">{product.description}</p>
      <div className="button-group">
        <button onClick={handleBuyNow} className="buy-button">Buy Now</button>
        <button onClick={handleAddToCart} className="cart-button">Add to Cart</button>
      </div>
      <style jsx>{`
        .product-page {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          text-align: center;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        .product-page h1 {
          font-size: 2.5rem;
          color: #333;
          margin-bottom: 15px;
        }
        .product-page .price {
          font-size: 1.5rem;
          color: #0070f3;
          margin: 10px 0;
          font-weight: bold;
        }
        .product-page .description {
          font-size: 1.2rem;
          color: #555;
          margin-bottom: 20px;
        }
        .button-group {
          display: flex;
          justify-content: center;
          gap: 20px;
        }
        .buy-button, .cart-button {
          padding: 12px 25px;
          border-radius: 5px;
          border: none;
          font-size: 1.1rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .buy-button {
          background-color: #0070f3;
          color: white;
        }
        .buy-button:hover {
          background-color: #005bb5;
        }
        .cart-button {
          background-color: #e74c3c;
          color: white;
        }
        .cart-button:hover {
          background-color: #c0392b;
        }
        .back-home-button {
          display: inline-block;
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  );
}
