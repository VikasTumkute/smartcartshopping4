'use client';


export default function HomePage() {
  return (
    <div>
      <style jsx>{`
        .background {
          background-image: url('/image/shopback123.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: white;
          text-align: center;
        }

        .content {
          background: rgba(0, 0, 0, 0.5); /* Adds a translucent overlay */
          padding: 20px;
          border-radius: 10px;
          max-width: 600px;
        }

        h1 {
          font-size: 2.5rem;
          margin-bottom: 20px;
        }

        p {
          font-size: 1.2rem;
          line-height: 1.5;
        }

        button {
          margin-top: 20px;
          background: #f39c12;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        button:hover {
          background: #d35400;
        }
      `}</style>

      <div className="background">
        <div className="content">
          <h1>Welcome to Our Website</h1>
          <p>Explore our amazing products and services. Click the button below to learn more.</p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
}
