import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: '',
    dob: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration Data:', formData);
    // Connect to your API here
  };

  return (
    <div className="register-page">
      {/* Left Panel with Background Image */}
      <div
        className="register-left"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/login.jpg)`, // Reference the image in the public folder
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative', // Enable positioning for the branding
        }}
      >
    </div>
        

      {/* Right Panel */}
      <div className="register-right">
        <div className="register-form-container">
          <h2>Hey there</h2>
          <p>
            Already know HealthCare? <a href="/login">Log in</a>
          </p>
          <form onSubmit={handleSubmit} className="register-form">
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Your password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="dob">Birth Date</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="register-button">Sign Up</button>
          </form>
          <div className="social-register">
            <p>Register with</p>
            <div className="social-buttons">
              <button className="social-button google">Google</button>
              <button className="social-button facebook">Facebook</button>
              <button className="social-button apple">Apple</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
