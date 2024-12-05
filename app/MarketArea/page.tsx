'use client';
import Head from 'next/head';
import Image from 'next/image';

export default function MarketArea() {
  return (
    <>
      <Head>
        <title>Market Area - Purple Palette</title>
        <meta name="description" content="Market Area for Purple Palette" />
      </Head>

      <div className="container">
        <header className="header">
          <div className="logo">
            <Image
              src="/image/pccccc.jfif" // Replace with your logo path in the public directory
              alt="Purple Palette Logo"
              width={80}
              height={80}
            />
          </div>
          <h1 className="page-title">Market Area</h1>
        </header>

        <section className="market-content">
          <h2>States of India</h2>
          <table className="market-table">
            <thead>
              <tr>
                <th>State Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ANDHRA PRADESH</td>
                <td>ASSAM</td>
                <td>BIHAR</td>
              </tr>
              <tr>
                <td>CHHATTISGARH</td>
                <td>GUJARAT</td>
                <td>HARYANA</td>
              </tr>
              <tr>
                <td>JHARKHAND</td>
                <td>KARNATAKA</td>
                <td>MAHARASHTRA</td>
              </tr>
              <tr>
                <td>MEGHALAYA</td>
                <td>MADHYA PRADESH</td>
                <td>MIZORAM</td>
              </tr>
              <tr>
                <td>MANIPUR</td>
                <td>RAJASTHAN</td>
                <td>ODISHA</td>
              </tr>
              <tr>
                <td>TAMIL NADU</td>
                <td>TELANGANA</td>
                <td>WEST BENGAL</td>
              </tr>
              <tr>
                <td>CHANDIGARH</td>
                <td>HIMACHAL PRADESH</td>
                <td>UTTAR PRADESH</td>
              </tr>
            </tbody>
          </table>

          <h2>Cities of Andhra Pradesh</h2>
          <table className="market-table">
            <thead>
              <tr>
                <th>City Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>SRI CITY</td>
                <td>VIJAYAWADA</td>
                <td>VISAKHAPATNAM</td>
              </tr>
            </tbody>
          </table>

          <h2>Cities of Bihar</h2>
          <table className="market-table">
            <thead>
              <tr>
                <th>City Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>BHAGALPUR</td>
                <td>DARBHANGA</td>
                <td>MUZAFFARPUR</td>
              </tr>
              <tr>
                <td>PATNA</td>
                <td>VAISHALI</td>
              </tr>
            </tbody>
          </table>

          <h2>Cities of Delhi</h2>
          <table className="market-table">
            <thead>
              <tr>
                <th>City Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CHANAKYAPURI</td>
                <td>CONNAUGHT PLACE</td>
                <td>DLF KIRTI NAGER</td>
              </tr>
            </tbody>
          </table>

          <h2>Cities of Gujarat</h2>
          <table className="market-table">
            <thead>
              <tr>
                <th>City Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>BHAVNAGAR</td>
                <td>DWARKA</td>
                <td>JAMNAGAR</td>
              </tr>
              <tr>
                <td>RAJKOT</td>
                <td>SURAT</td>
                <td>VADODARA</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>

      <style jsx>{`
        .container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 2rem;
          font-family: Arial, sans-serif;
          background: linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), 
                      url('/image/market123.jpg') center/cover; /* Replace with your background image path */
          border-radius: 10px;
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
          color: #ff477e;
        }
        .market-content {
          line-height: 1.8;
        }
        .market-content h2 {
          font-size: 1.5rem;
          font-weight: bold;
          color: #ff477e;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .market-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 2rem;
        }
        .market-table th,
        .market-table td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: center;
        }
        .market-table th {
          background-color: #AC3E31;
          color: white;
          font-weight: bold;
        }
        .market-table td {
          font-size: 1rem;
        }
      `}</style>
    </>
  );
}
