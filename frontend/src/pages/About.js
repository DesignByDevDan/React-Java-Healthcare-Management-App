import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './About.css';

const About = () => {
  const [aboutData, setAboutData] = useState({
    title: '',
    description: '',
    team: [],
    values: [],
  });

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setAboutData({
        title: 'About Us',
        description: 'Learn more about our team, mission, and what drives us to provide exceptional service.',
        team: [
          { name: 'Daniel Lowery', role: 'Founder & CEO', bio: 'Leading the vision and strategy for the company.' },
          { name: 'Sarah Lee', role: 'CTO', bio: 'Driving technological innovation and development.' },
          { name: 'Alex Johnson', role: 'COO', bio: 'Ensuring operational excellence and growth.' },
        ],
        values: [
          'Customer-Centric Approach',
          'Innovation and Excellence',
          'Integrity and Transparency',
          'Diversity and Inclusion',
        ],
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

      {/* About Section */}
      <h1 id="about-title" className="about-title">{aboutData.title}</h1>
      <p className="about-description">{aboutData.description}</p>

      {/* Team Section */}
      <section className="team-section">
        <h2 className="section-title">Meet Our Team</h2>
        <div className="team-grid">
          {aboutData.team.map((member, index) => (
            <div key={index} className="team-member">
              <h3>{member.name}</h3>
              <p><strong>{member.role}</strong></p>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values Section */}
      <section className="values-section">
        <h2 className="section-title">Our Core Values</h2>
        <ul className="values-list">
          {aboutData.values.map((value, index) => (
            <li key={index} className="value-item">{value}</li>
          ))}
        </ul>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2 className="section-title">Contact Us</h2>
        <p>Have questions or want to get in touch? We'd love to hear from you.</p>
        <form className="contact-form">
          <input
            type="text"
            placeholder="Your Name"
            className="contact-input"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="contact-input"
            required
          />
          <textarea
            placeholder="Your Message"
            className="contact-textarea"
            rows="5"
            required
          ></textarea>
          <button type="submit" className="contact-button">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default About;
