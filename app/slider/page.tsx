"use client";

import React, { useState, useEffect } from "react";

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { id: 1, image: "/image/WhatsApp Image 2024-11-29 at 11.30.59 AM (1).jpeg", content: "Slide 1" },
    { id: 2, image: "/image/diwali.jpg", content: "Slide 2" },
    { id: 3, image: "/image/gift.jpg", content: "Slide 3" },
  ];

  const sliderStyles: React.CSSProperties = {
    display: "flex",
    transform: `translateX(-${currentIndex * 100}%)`,
    transition: "transform 0.5s ease-in-out",
    width: `${slides.length * 100}%`,
    backgroundColor:"black",
  };

  const slideStyles: React.CSSProperties = {
    minWidth: "100%",
    height: "500px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    border: "5px solid #ccc", // Add border around each slide
    boxSizing: "border-box",
  };

  const imageStyles: React.CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "30px",
  };

  const contentStyles: React.CSSProperties = {
    position: "absolute",
    bottom: "20px",
    left: "20px",
    background: "rgba(0, 0, 0, 0.5)",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "18px",
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Automatic slide movement
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div style={{ overflow: "hidden", width: "100%", position: "relative" }}>
      <div style={sliderStyles}>
        {slides.map((slide) => (
          <div
            key={slide.id}
            style={slideStyles}
          >
            <img src={slide.image} alt={slide.content} style={imageStyles} />
            <div style={contentStyles}>{slide.content}</div>
          </div>
        ))}
      </div>
      <button
        onClick={goToPreviousSlide}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          background: "#000",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          cursor: "pointer",
        }}
      >
        {"<"}
      </button>
      <button
        onClick={goToNextSlide}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          background: "#000",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          cursor: "pointer",
        }}
      >
        {">"}
      </button>
    </div>
  );
};

export default Slider;
