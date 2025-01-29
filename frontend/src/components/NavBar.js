import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">MediConnect</Link>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={isMenuOpen ? 'navbar-links active' : 'navbar-links'}>
        <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
        <li><Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>Dashboard</Link></li>
        <li><Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link></li>
        <li><Link to="/register" onClick={() => setIsMenuOpen(false)}>Register</Link></li>
        <li><Link to="/availability" onClick={() => setIsMenuOpen(false)}>Availability</Link></li>
        <li><Link to="/booking" onClick={() => setIsMenuOpen(false)}>Booking</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
