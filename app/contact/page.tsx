"use client";

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Add API call to handle form submission here
    setSubmitted(true);
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>We’d love to hear from you! Please fill out the form below, and we’ll get back to you shortly.</p>

      {submitted ? (
        <p className="success-message">Thank you for contacting us! We will respond soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
        </form>
      )}

      {/* Company Information */}
      <div className="company-info">
        <h2>Contact Information</h2>
        <p>
          <strong>Phone:</strong> 9902496920
        </p>
        <p>
          <strong>Email:</strong> pcart@gmail.com
        </p>
        <p>
          <strong>Address:</strong> 123 Business karnataka, bangaluru, India, 12345
        </p>
      </div>

      <style jsx>{`
        .contact-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f9f9f9;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }
            
            h1 {
            font-size: 2.5rem;
            color: #333;
            text-align: center;
            margin-bottom: 20px;
            }

            p {
            font-size: 1.1rem;
            color: #555;
            line-height: 1.6;
            margin-bottom: 15px;
            }

            .contact-form {
            display: flex;
            flex-direction: column;
            }

            .contact-form input,
            .contact-form textarea {
            padding: 10px;
            margin-bottom: 15px;
            font-size: 1rem;
            border: 1px solid #ddd;
            border-radius: 4px;
            outline: none;
            }

            .contact-form button {
            padding: 12px 20px;
            font-size: 1rem;
            background-color: #0070f3;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s;
            }

            .contact-form button:hover {
            background-color: #005bb5;
            }

            .success-message {
            font-size: 1.2rem;
            color: green;
            text-align: center;
            margin-top: 20px;
            }

            .company-info {
            margin-top: 40px;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }

            .company-info h2 {
            font-size: 2rem;
            color: #333;
            margin-bottom: 10px;
            }

            .company-info p {
            font-size: 1.1rem;
            color: #555;
            margin-bottom: 10px;
            }

            .company-info strong {
            color: #333;
        }
      `}</style>
    </div>
  );
}