import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/activities">Activities</Link>
      <Link to="/carbon-footprint">Carbon Footprint</Link>
      <Link to="/suggestions">Suggestions</Link>
      <Link to="/insights">Insights</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  );
}

export default Navbar;
