import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './Home.css';

const Home = () => {
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setPageData({
        title: 'Home Page',
        message: 'Welcome to the Home Page! Here, you can explore features, learn about our app, and get started.',
      });
    }, 1000);
  }, []);

  if (!pageData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="home-container" role="main" aria-labelledby="home-title">
      <Helmet>
        <title>{pageData.title} - My Application</title>
        <meta name="description" content={pageData.message} />
        <meta property="og:title" content={pageData.title} />
        <meta property="og:description" content={pageData.message} />
      </Helmet>
      <h1 id="home-title" className="home-title">{pageData.title}</h1>
      <p className="home-description">{pageData.message}</p>
    </div>
  );
};

export default Home;
