"use client";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContainer}>
        <div style={styles.footerSection}>
          <h3 style={styles.heading}>PURPLE PALETTE</h3>
          
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <Link href="/about" style={{ textDecoration: "none", color: "inherit" }}>
                About Us
              </Link>
            </li>
            <li style={styles.listItem}>
              <Link href="" style={{ textDecoration: "none", color: "inherit" }}>
                
              </Link>
            </li>
            <li style={styles.listItem}>
              <Link href="/our products" style={{ textDecoration: "none", color: "inherit" }}>
                Our Products
              </Link>
            </li>
            <li style={styles.listItem}>
              <Link href="/our-gallery" style={{ textDecoration: "none", color: "inherit" }}>
                Our-Gallery
              </Link>
            </li>
            <li style={styles.listItem}>
              <Link href="/blog" style={{ textDecoration: "none", color: "inherit" }}>
                Blog
              </Link>
            </li>
            <li style={styles.listItem}>
              <Link href="/contact" style={{ textDecoration: "none", color: "inherit" }}>
                Contact
              </Link>
            </li>
            <li style={styles.listItem}>
              <Link href="/privacypolicy" style={{ textDecoration: "none", color: "inherit" }}>
                PrivacyPolicy
              </Link>
            </li>
            <li style={styles.listItem}>
              <Link href="/our-client" style={{ textDecoration: "none", color: "inherit" }}>
                Our-Client
              </Link>
            </li>
            <li style={styles.listItem}>
              <Link href="/MarketArea" style={{ textDecoration: "none", color: "inherit" }}>
                MarketArea
              </Link>
            </li><li style={styles.listItem}>
              <Link href="" style={{ textDecoration: "none", color: "inherit" }}>
                
              </Link>
            </li>
          </ul>
        </div>
        <div style={styles.footerSection}>
          <h3 style={styles.heading}>Our Products</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <Link href="/t-shirts" style={{ textDecoration: "none", color: "inherit" }}>
                t-shirts
              </Link>
            </li>
            <li style={styles.listItem}>
              <Link href="/corporate gifts" style={{ textDecoration: "none", color: "inherit" }}>
                corporate gifts
              </Link>
            </li>
            <li style={styles.listItem}>
              <Link href="/printing services" style={{ textDecoration: "none", color: "inherit" }}>
                printing services
              </Link>
            </li>
            <li style={styles.listItem}>
              <Link href="/hoodies" style={{ textDecoration: "none", color: "inherit" }}>
                hoodies
              </Link>
            </li>
            <li style={styles.listItem}>
              <Link href="/silk saree" style={{ textDecoration: "none", color: "inherit" }}>
                silk saree
              </Link>
            </li>
            <li style={styles.listItem}>
              <Link href="/shrit" style={{ textDecoration: "none", color: "inherit" }}>
                shirt
              </Link>
            </li>
            <li style={styles.listItem}>
              <Link href="/shoes" style={{ textDecoration: "none", color: "inherit" }}>
                shoes
              </Link>
            </li>
            <li style={styles.listItem}>
              <Link href="/jeans" style={{ textDecoration: "none", color: "inherit" }}>
                jeans
              </Link>
            </li>
          </ul>
        </div>
        <div style={styles.footerSection}>
          <h3 style={styles.heading}></h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
                
              </Link>
            </li>
            <li style={styles.listItem}>
              <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
                
              </Link>
            </li>
          </ul>
        </div>
        <div style={styles.footerSection}>
          <h3 style={styles.heading}></h3>
          <button style={styles.button}>Refer & Earn</button>
          <div style={styles.socialIcons}>
            <span style={styles.socialIcon}>
            <Link 
            href="https://facebook.com" 
            target="_blank" 
           style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center" }}
              >
            <img 
            src="/image/FFFF12.jfif" 
            alt="Facebook Icon" 
            style={{ width: "40px", height: "40px", marginRight: "8px" }} 
             />
            
             </Link>
            </span>
            <span style={styles.socialIcon}>
              <Link href="https://twitter.com" target="_blank" style={{ textDecoration: "none", color: "inherit" }}>
              <img 
            src="/image/IIII12.jfif" 
            alt="twitter Icon" 
            style={{ width: "40px", height: "40px", marginRight: "8px" }} 
             />
              </Link>
            </span>
           
           
            
            <span style={styles.socialIcon}>
              <Link href="https://instagram.com" target="_blank" style={{ textDecoration: "none", color: "inherit" }}>
              <img 
            src="/image/INSTA12.jfif" 
            alt="instagram Icon" 
            style={{ width: "40px", height: "40px", marginRight: "8px" }} 
             />
              
              </Link>
            </span>
          </div>
        </div>
        <div style={styles.footerSection}>
          <h3 style={styles.heading}>SUBSCRIBE US</h3>
          <form style={styles.form}>
            <input type="text" placeholder="Name" style={styles.input} />
            <input type="email" placeholder="Email*" style={styles.input} />
            <button type="submit" style={styles.subscribeButton}>
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div style={styles.footerBottom}>
        <p>© Purple Pallete. All Rights Reserved | Privacy Policy | Terms & Conditions</p>
        <div style={styles.contactInfo}>
          <span>🇮🇳 +91 9965135919</span>
          <span>🇺🇸 +1 7066245516</span>
          <span>info@rsrtechnologies.org</span>
          
        </div>
      </div>
          <div
      style={{
        position: "fixed",
        bottom: "16px",
        right: "16px",
      }}
    >
      <Link href="/helpform" passHref>
        <img
          src="/helpicon.jpeg" // Update the path to match your file location
          alt="Help Us"
          style={{
            width: "64px", // 16 rem
            height: "64px", // 16 rem
            cursor: "pointer",
            transition: "transform 0.3s ease",
          }}
          role="button"
          aria-label="Open Help Form"
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </Link>
    </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#2b547e",
    color: "white",
    padding: "20px 0",
    fontFamily: "Arial, sans-serif",
  },
  footerContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },
  footerSection: {
    flex: 1,
    margin: "10px",
    minWidth: "200px",
  },
  heading: {
    fontSize: "1.2rem",
    marginBottom: "15px",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    marginBottom: "10px",
    cursor: "pointer",
  },
  button: {
    backgroundColor: "#0070f3",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  socialIcons: {
    marginTop: "20px",
  },
  socialIcon: {
    display: "inline-block",
    marginRight: "20px",
    fontSize: "1.2rem",

  },
  form: {
    display: "flex",
    flexDirection: "column" as "column",
  },
  input: {
    marginBottom: "10px",
    padding: "8px",
    border: "1px solid #ddd",
    borderRadius: "5px",
  },
  subscribeButton: {
    padding: "10px",
    backgroundColor: "#00bcd4",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  footerBottom: {
    backgroundColor: "#1a3c5a",
    padding: "10px 20px",
    textAlign: "center" as "center",
    fontSize: "0.9rem",
  },
  contactInfo: {
    marginTop: "10px",
  },
  
};

export default Footer;