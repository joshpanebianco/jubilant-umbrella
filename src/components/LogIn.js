import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class LogIn extends Component {
  render() {
    return (
      <div>
        <h2>Log In</h2>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="submit" />
        </form>
        <Link to='/signup'>Don't have an account?</Link>
      </div>
    );
  }
}

export default LogIn;
