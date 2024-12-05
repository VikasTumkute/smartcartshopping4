"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "./footer/page"; // Correctly importing Footer
import Slider from "./slider/page"; // Example shared component


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
  };

  return (
    <html lang="en">
      <head>
        <title>PURPLE PALLETE</title>
      </head>
      <body>
        <header style={styles.header}>
          <nav style={styles.topNav}>
            <Link href="/" style={styles.logo}>
              <img src="/image/pccccc.jfif" alt="P-Cart Logo" style={styles.logoImage} />
            </Link>
            <div style={styles.searchBar}>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={styles.searchInput}
                list="product-suggestions"
              />
              <datalist id="product-suggestions">
                <option value="saree" />
                <option value="Juicer" />
                <option value="camera" />
                <option value="Headphones" />
                <option value="plant" />
                <option value="pot" />
                <option value="fryers" />
                <option value="laptop" />
                <option value="radio" />
                <option value="hairdryer" />
                <option value="silk saree" />
                <option value="gold jewelry" />
                <option value="Room Heater" />
                <option value="Steam Iron" />
                <option value="Dry Iron" />
              </datalist>
              <button onClick={handleSearch} style={styles.searchButton}>
                Search
              </button>
            </div>
            <div style={styles.authLinks}>
              {isAuthenticated ? (
                <>
                  <button onClick={handleLogout} style={styles.navButton}>Logout</button>
                  <Link href="/change-password" style={styles.navLink}>Change Password</Link>
                </>
              ) : (
                <>
                  <Link href="/" style={styles.navLink}>Home</Link>
                  <Link href="/about" style={styles.navLink}>About</Link>
                  <Link href="/product" style={styles.navLink}>Our Product</Link>
                  <Link href="/our-gallery" style={styles.navLink}>Our Gallery</Link>
                  <Link href="/blog" style={styles.navLink}>Blogs</Link>
                  <Link href="/contact" style={styles.navLink}>Contact Us</Link>
                </>
              )}
            </div>
          </nav>
        </header>
        <main style={styles.mainContent}>
          {children}
        </main>
      
        <Footer />
      </body>
    </html>
  );
}

const styles = {
  header: {
    backgroundColor: "#000",
    color: "#fff",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  topNav: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    width: "100%",
  },
  logo: {
    display: "flex",
    alignItems: "center",
  },
  logoImage: {
    width: "50px",
  },
  searchBar: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    flex: 1,
  },
  searchInput: {
    padding: "10px",
    borderRadius: "5px",
    width: "70%",
  },
  searchButton: {
    padding: "10px 15px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  authLinks: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
  },
  navButton: {
    padding: "10px 15px",
    backgroundColor: "#f44336",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  mainContent: {
    flex: 1,
    padding: "20px",
  },
};
