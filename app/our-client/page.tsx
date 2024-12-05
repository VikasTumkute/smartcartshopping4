'use client';
import Image from 'next/image';

const clients = [
  {
    id: 1,
    name: 'CIRS',
    description: 'Leading the way in consumer electronics.',
    logo: '/image/cirs123.jpg', // Add this image to the /public/logos folder
  },
  {
    id: 2,
    name: 'CNBC',
    description: 'Trendsetters in modern fashion and design.',
    logo: '/image/cnbc123.jpg', // Add this image to the /public/logos folder
  },
  {
    id: 3,
    name: 'CROCS',
    description: 'Innovating everyday living with smart home solutions.',
    logo: '/image/crocs123.png', // Add this image to the /public/logos folder
  },
];

export default function OurClientsPage() {
  return (
    <div className="container">
      <h1 className="title">Our Clients</h1>
      <p className="subtitle">
        We are proud to collaborate with industry leaders to deliver quality products.
      </p>
      <div className="clients-grid">
        {clients.map((client) => (
          <div key={client.id} className="client-card">
            <Image
              src={client.logo}
              alt={`${client.name} logo`}
              width={100}
              height={100}
              className="client-logo"
            />
            <h2 className="client-name">{client.name}</h2>
            <p className="client-description">{client.description}</p>
          </div>
        ))}
      </div>
      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
          text-align: center;
        }
        .title {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          font-weight: bold;
        }
        .subtitle {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          color: #555;
        }
        .clients-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }
        .client-card {
          padding: 1rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          background: #fdfdfd;
          transition: box-shadow 0.3s ease;
        }
        .client-card:hover {
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .client-name {
          margin: 0.5rem 0;
          font-size: 1.2rem;
          font-weight: bold;
        }
        .client-description {
          color: #666;
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  );
}
