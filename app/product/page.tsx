'use client';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useState } from 'react';

export default function ProductPage() {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    quantity: '',
    message: '',
  });

  const products = [
    {
      title: 'T-shirt',
      description:
        'As Purple Palette is a famous T-shirt Manufacturer in Delhi, you can avail a variety of uniquely styled T-shirts that offer comfort.',
      price: 1000,
      imageUrl: '/image/t-shirts.jpg',
    },
    {
      title: 'Hoodies',
      description: 'Warm and cozy hoodies',
      price: 500,
      imageUrl: '/image/hoodies.webp',
    },
    {
      title: 'Jeans',
      description: 'Durable and stylish jeans',
      price: 1800,
      imageUrl: '/image/jeans517.webp',
    },
    {
      title: 'Gifts',
      description: 'Unique and thoughtful gifts',
      price: 1500,
      imageUrl: '/image/gifts123.png',
    },
    {
      title: 'Child Dress',
      description: 'Adorable and comfortable dresses for children',
      price: 1500,
      imageUrl: '/image/chi12.webp',
    },
    {
      title: 'Shoes',
      description: 'Stylish and durable shoes',
      price: 500,
      imageUrl: '/image/shoes112.jpg',
    },
  ];

  function openQuoteForm(product: any) {
    setSelectedProduct(product);
    setShowQuoteForm(true);
  }

  function closeQuoteForm() {
    setShowQuoteForm(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      location: '',
      quantity: '',
      message: '',
    });
  }

  function handleFormChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log('Quote Form Data:', { ...formData, product: selectedProduct });
    alert('Your quote request has been submitted!');
    closeQuoteForm();
  }

  return (
    <div>
      <h1>Our Products</h1>
      <style jsx>{`
        .productPage {
          background-image: url('/image/pback123.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          padding: 50px 20px;
        }

        .productContainer {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          justify-content: center;
          padding: 20px;
        }

        .productCard {
          border: 1px solid #ddd;
          padding: 16px;
          border-radius: 8px;
          text-align: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          width: 200px;
          background: white;
          cursor: pointer;
          transition: transform 0.3s;
        }

        .productCard:hover {
          transform: scale(1.05);
        }

        .quoteModal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .quoteForm {
          background: white;
          padding: 20px;
          border-radius: 10px;
          width: 90%;
          max-width: 400px;
          height: 80%;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          overflow-y: auto;
          position: relative;
        }

        .closeButton {
          position: absolute;
          top: 8px;
          right: 8px;
          background: none;
          border: none;
          font-size: 1.2rem;
          cursor: pointer;
        }

        .formField {
          margin-bottom: 12px;
        }

        .formField label {
          display: block;
          margin-bottom: 6px;
          font-size: 0.9rem;
          font-weight: bold;
        }

        .formField input,
        .formField textarea {
          width: 100%;
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 0.9rem;
        }

        .formField textarea {
          resize: none;
        }

        .submitButton {
          background: #f39c12;
          color: white;
          border: none;
          padding: 10px;
          width: 100%;
          border-radius: 5px;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.3s;
        }

        .submitButton:hover {
          background: #d35400;
        }
      `}</style>

      <div className="productPage">
        <div className="productContainer">
          {products.map((product, index) => (
            <div
              className="productCard"
              key={index}
              onClick={() => openQuoteForm(product)}
            >
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={200}
                height={150}
              />
              <h2>{product.title}</h2>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </div>

      {showQuoteForm && selectedProduct && (
        <div className="quoteModal">
          <div className="quoteForm">
            <button className="closeButton" onClick={closeQuoteForm}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <h2>Get a Quote</h2>
            <Image
              src={selectedProduct.imageUrl}
              alt={selectedProduct.title}
              width={300}
              height={200}
            />
            <form onSubmit={handleSubmit}>
              <div className="formField">
                <label htmlFor="name">Your/Company Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="formField">
                <label htmlFor="email">Your Email ID*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="formField">
                <label htmlFor="phone">Phone Number*</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="formField">
                <label htmlFor="location">Your Location*</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="formField">
                <label htmlFor="quantity">Quantity*</label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="formField">
                <label htmlFor="message">Your Message*</label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleFormChange}
                ></textarea>
              </div>
              <button type="submit" className="submitButton">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
