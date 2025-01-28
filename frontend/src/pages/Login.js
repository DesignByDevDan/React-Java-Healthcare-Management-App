import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempted with:', { email, password });
  };

  return (
    <div className="login-page">
      {/* Left Panel with Background Image */}
      <div
        className="login-left"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/login.jpg)`, // Reference the image in the public folder
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="branding">
          <h1>MediConnect</h1>
          <p>Your trusted healthcare management app</p>
        </div>
      </div>

      {/* Right Panel */}
      <div className="login-right">
        <div className="login-form-container">
          <h2>Welcome back</h2>
          <p>
            New to MediConnect? <a href="/signup">Sign up</a>
          </p>
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Your password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="form-group remember-me">
              <label>
                <input type="checkbox" /> Remember me
              </label>
            </div>
            <button type="submit" className="login-button">Log in</button>
          </form>
          <a href="/forgot-password" className="forgot-password">Forgot password?</a>
          <div className="social-login">
            <button className="social-button google">Log in with Google</button>
            <button className="social-button facebook">Log in with Facebook</button>
          </div>
          <div className="book-appointment">
            <button className="appointment-button">
              Book an appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
