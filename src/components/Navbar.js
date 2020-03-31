import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
        <Link to="/airplanes">Create Airplane</Link>
        <Link to="/flights">Create Flight</Link>
        <Link to="/search">Search Flight</Link>
      </div>
    );
  }
}

export default Navbar;
