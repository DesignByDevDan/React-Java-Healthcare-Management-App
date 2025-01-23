import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Optional: Create this file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><NavLink to="/" activeClassName="active" exact>Home</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
        <li><NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink></li>
        <li><NavLink to="/login" activeClassName="active">Login</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
