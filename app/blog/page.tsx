"use client";
import React, { useState } from "react";

const AIArticle: React.FC = () => {
  const [expandedArticles, setExpandedArticles] = useState<Record<number, boolean>>({});

  const toggleExpand = (index: number) => {
    setExpandedArticles((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const articles = [
    {
      title: "Custom Hoodie Printing Services",
      category: "Apparel Customization",
      date: "November 29, 2024",
      views: "2,145 Views",
      image: "/image/hoodies.webp",
      summary:
        "Design your own hoodie with advanced printing services offering vibrant colors, durable prints, and endless customization options.",
      fullText:
        "Hoodie printing services have transformed the fashion industry by allowing customers to design their own apparel. With options like screen printing, embroidery, and direct-to-garment (DTG) printing, you can create hoodies with personalized logos, slogans, or graphics. These services are perfect for businesses, sports teams, or anyone looking to make a unique fashion statement. Most platforms offer user-friendly online design tools, making customization easy and accessible.",
    },
    {
      title: "T-Shirt Customization: Express Your Style",
      category: "Fashion Trends",
      date: "November 25, 2024",
      views: "1,872 Views",
      image: "/image/t-shirts.jpg",
      summary:
        "T-shirt customization allows you to express your personality with unique designs, patterns, and styles.",
      fullText:
        "T-shirt customization has gained immense popularity as it enables individuals to showcase their creativity. Whether it's for personal use, a promotional campaign, or a special event, services like sublimation, vinyl printing, and heat transfer make it easy to produce high-quality custom T-shirts. Many platforms even provide bulk order discounts, making them ideal for businesses and organizations. The trend emphasizes self-expression and sustainability, as customers can create durable, meaningful clothing.",
    },
    {
      title: "Jeans Customization: Express Your Style",
      category: "Fashion Trends",
      date: "November 25, 2024",
      views: "1,872 Views",
      image: "/image/jeans517.webp",
      summary:
        "Jeans customization allows you to express your personality with unique designs, patterns, and styles.",
      fullText:
        "Jeans customization has gained immense popularity as it enables individuals to showcase their creativity. Whether it's for personal use, a promotional campaign, or a special event, services like sublimation, vinyl printing, and heat transfer make it easy to produce high-quality custom T-shirts. Many platforms even provide bulk order discounts, making them ideal for businesses and organizations. The trend emphasizes self-expression and sustainability, as customers can create durable, meaningful clothing.",
    },
    {
      title: "silk saree Customization: Express Your Style",
      category: "Fashion Trends",
      date: "November 25, 2024",
      views: "1,872 Views",
      image: "/image/silk.jpg",
      summary:
        "Silk Saree customization allows you to express your personality with unique designs, patterns, and styles.",
      fullText:
        "Silk Saree customization has gained immense popularity as it enables individuals to showcase their creativity. Whether it's for personal use, a promotional campaign, or a special event, services like sublimation, vinyl printing, and heat transfer make it easy to produce high-quality custom T-shirts. Many platforms even provide bulk order discounts, making them ideal for businesses and organizations. The trend emphasizes self-expression and sustainability, as customers can create durable, meaningful clothing.",
    },
    // Other articles...
  ];

  return (
    <div>
      <style>
        {`
          .container {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            padding: 20px;
            max-width: 800px;
            margin: 0 auto;
          }

          .heading {
            text-align: center;
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 30px;
          }

          .article {
            margin-bottom: 30px;
            border-bottom: 1px solid #ccc;
            padding-bottom: 20px;
          }

          .article img {
            max-width: 100%;
            height: auto;
          }

          .article h1 {
            font-size: 20px;
            margin: 10px 0;
          }

          .article p {
            margin: 10px 0;
          }

          .category-date {
            color: #888;
            font-size: 14px;
            margin-bottom: 10px;
          }

          .read-more {
            color: #007bff;
            cursor: pointer;
            font-size: 16px;
            font-weight: bold;
            display: inline-block;
          }

          .read-more:hover {
            text-decoration: underline;
          }
        `}
      </style>

      <div className="container">
        {/* Add the heading for the blogs page */}
        <div className="heading">Welcome to Our Blog</div>

        {/* Render the list of articles */}
        {articles.map((article, index) => (
          <div className="article" key={index}>
            <img src={article.image} alt={article.title} />
            <h1>{article.title}</h1>
            <div className="category-date">
              <span>{article.category}</span> | <span>{article.date}</span> | <span>{article.views}</span>
            </div>
            <p>{expandedArticles[index] ? article.fullText : article.summary}</p>
            <span className="read-more" onClick={() => toggleExpand(index)}>
              {expandedArticles[index] ? "Read Less" : "Read More"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIArticle;
