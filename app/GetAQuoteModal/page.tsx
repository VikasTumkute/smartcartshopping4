"use client";
import { useState } from 'react';

const GetAQuoteModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    mobileNumber: '',
    location: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsModalOpen(false); // Close the modal after submission
  };

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)} className="quote-button">Get A Quote</button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button onClick={() => setIsModalOpen(false)} className="close-button">X</button>
            <h3 className="modal-title">Get A Quote</h3>
            <p>If you have an urgent requirement please fill the form or dial contact number: +91-8010222333</p>

            <form onSubmit={handleSubmit} className="form">
              <div className="input-group">
                <label>Your/Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                  className="input"
                />
              </div>
              <div className="input-group">
                <label>Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="input"
                />
              </div>
              <div className="input-group">
                <label>Your Mobile Number</label>
                <input
                  type="text"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  required
                  className="input"
                />
              </div>
              <div className="input-group">
                <label>Your Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  className="input"
                />
              </div>
              <div className="input-group">
                <label>Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="textarea"
                ></textarea>
              </div>
              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        .quote-button {
          padding: 10px 20px;
          background-color: #ff4081;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .modal-content {
          background-color: #fff;
          padding: 20px;
          border-radius: 5px;
          width: 400px;
          position: relative;
        }

        .close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          background-color: transparent;
          border: none;
          font-size: 18px;
          cursor: pointer;
        }

        .modal-title {
          font-size: 24px;
          margin-bottom: 10px;
        }

        .form {
          display: flex;
          flex-direction: column;
        }

        .input-group {
          margin-bottom: 10px;
        }

        .input {
          padding: 10px;
          border-radius: 5px;
          border: 1px solid #ccc;
          width: 100%;
        }

        .textarea {
          padding: 10px;
          border-radius: 5px;
          border: 1px solid #ccc;
          width: 100%;
          height: 100px;
        }

        .submit-button {
          padding: 10px 20px;
          background-color: #4CAF50;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default GetAQuoteModal;
