"use client";

const About = () => {
  return (
    <div>
      <main style={styles.mainContent}>
        <section style={styles.aboutSection}>
          <h1 style={styles.title}>About Purple Palette</h1>
          <p style={styles.description}>
            Founded in 2012, Purple Palette is the leading corporate clothing, gifting, and branding solutions provider in India and is well-known for transforming businesses into ‘brands’.
            We have our services spanning from T-Shirt Manufacturing, Corporate Apparels, Corporate Branding, Corporate Merchandising, Designing & Printing, Corporate Gifting, etc. Such an impressive range of services makes us a one-stop-shop for corporate communication needs, especially for availing of corporate apparel, corporate gifts, and printing services.
          </p>
        </section>
        <section style={styles.imageSection}>
          <img src="/image/pppp.jfif" alt="Purple Palette" style={styles.image} />
        </section>
      </main>
    </div>
  );
};

const styles = {
  mainContent: {
    padding: '20px',
    textAlign: 'center',
    backgroundImage: 'url("/image/istockphoto2323.jpg")', // Add the background image here
    backgroundSize: 'cover', // Ensure the image covers the entire area
    backgroundPosition: 'center', // Center the image
    backgroundRepeat: 'no-repeat', // Prevent tiling
    minHeight: '100vh', // Ensure the background spans the full viewport height
    color: '#fff', // Change text color to make it visible on the background
  },
  aboutSection: {
    marginBottom: '20px',
    background: 'rgba(0, 0, 0, 0.6)', // Optional: Add a semi-transparent overlay for better readability
    padding: '20px',
    borderRadius: '10px',
  },
  title: {
    fontSize: '36px',
    marginBottom: '10px',
  },
  description: {
    fontSize: '18px',
    lineHeight: '1.6',
    maxWidth: '800px',
    margin: '0 auto',
  },
  imageSection: {
    marginTop: '30px',
  },
  image: {
    width: '100%',
    maxWidth: '600px',
    borderRadius: '10px',
  },
};

export default About;
