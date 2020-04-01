import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div className="top-nav">
        <div className="nav-list">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/signup" className="nav-item">Sign Up</Link>
          <Link to="/login" className="nav-item">Log In</Link>
          <Link to="/airplanes"className="nav-item">Create Airplane</Link>
          <Link to="/flights" className="nav-item">Create Flight</Link>
          <Link to="/search" className="nav-item">Search Flight</Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
