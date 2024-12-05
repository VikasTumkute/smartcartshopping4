'use client';
import Head from "next/head";
import Image from "next/image";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Purple Palette</title>
        <meta name="description" content="Privacy Policy for Purple Palette" />
      </Head>

      <div className="container">
        <header className="header">
          <div className="logo">
            <Image
              src="/image/pccccc.jfif" // Ensure this file exists in the public folder
              alt="Purple Palette Logo"
              width={80}
              height={80}
            />
          </div>
          <h1 className="page-title">Privacy Policy</h1>
        </header>

        <section className="content">
          <p>
            This Privacy Policy describes our policies and procedures on the
            collection, use, and disclosure of your information when you use our service and tells you about your privacy rights and how the law protects you.
          </p>

          <p>
            We use your personal data to provide and improve the service. By
            using the service, you agree to the collection and use of
            information in accordance with this Privacy Policy.
          </p>

          <h2>Interpretation and Definitions</h2>

          <h3>Interpretation</h3>
          <p>
            Words with their initial letters capitalized have specific meanings defined below. These definitions apply regardless of whether they appear in singular or plural.
          </p>

          <h3>Definitions</h3>
          <ul>
            <li>
              <strong>Account:</strong> A unique account created for you to
              access our service or parts of our service.
            </li>
            <li>
              <strong>Service:</strong> Refers to the website provided by
              Purple Palette.
            </li>
          </ul>
        </section>

        <footer className="footer">
          <a
            href="https://wa.me/your-whatsapp-number"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            <Image
              src="/image/whatsup.jpg" // Ensure this file exists in the public folder
              alt="WhatsApp"
              width={40}
              height={40}
            />
            WhatsApp
          </a>
          <button className="quote-button">Get A Quote</button>
        </footer>
      </div>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
          font-family: Arial, sans-serif;
          color: #333;
          background-image: url('
          /image/123456789.jpg'); /* Replace with your background image path */
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          min-height: 100vh;
        }
        .header {
          text-align: center;
          margin-bottom: 2rem;
        }
        .logo {
          display: flex;
          justify-content: center;
          margin-bottom: 1rem;
        }
        .page-title {
          font-size: 2rem;
          font-weight: bold;
        }
        .content {
          line-height: 1.6;
        }
        .content h2 {
          font-size: 1.5rem;
          margin-top: 2rem;
        }
        .content h3 {
          font-size: 1.2rem;
          margin-top: 1rem;
        }
        .content ul {
          list-style-type: disc;
          margin-left: 1.5rem;
          padding-left: 1rem;
        }
        .footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 3rem;
        }
        .whatsapp-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background-color: #25d366;
          color: white;
          border: none;
          border-radius: 5px;
          text-decoration: none;
        }
        .whatsapp-button:hover {
          background-color: #20c156;
        }
        .quote-button {
          background-color: #ff477e;
          color: white;
          border: none;
          border-radius: 5px;
          padding: 0.5rem 1rem;
          cursor: pointer;
        }
        .quote-button:hover {
          background-color: #e63d6e;
        }
      `}</style>
    </>
  );
}
