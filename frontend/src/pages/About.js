import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './About.css';

const About = () => {
  const [aboutData, setAboutData] = useState({ title: "", description: "" });

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setAboutData({
        title: "About Us",
        description: "Learn more about our team, mission, and what drives us to provide exceptional service."
      });
    }, 1000);
  }, []);

  if (!aboutData.title) {
    return <p>Loading...</p>; // Fallback while fetching
  }

  return (
    <div className="about-container" role="main" aria-labelledby="about-title">
      <Helmet>
        <title>{aboutData.title} - My Application</title>
        <meta name="description" content={aboutData.description} />
        <meta property="og:title" content={aboutData.title} />
        <meta property="og:description" content={aboutData.description} />
        <meta property="og:type" content="website" />
      </Helmet>
      <h1 id="about-title" className="about-title">{aboutData.title}</h1>
      <p className="about-description">{aboutData.description}</p>
    </div>
  );
};

export default About;
