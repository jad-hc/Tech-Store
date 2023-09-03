import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import LoadingSpinner from './LoadingSpinner';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call delay for demonstration purposes
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after a delay (replace this with your actual API call)
    }, 1500); // Adjust the delay as needed or replace with your API fetch
  }, []);

  return (

    <div>
      {isLoading ? ( // Render LoadingSpinner when isLoading is true
        <LoadingSpinner className="loader-center" />
      ) : (
        <div className="layout">
      <Head>
        <title>Tech Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
      )}
    </div>
  )
}

export default Layout;