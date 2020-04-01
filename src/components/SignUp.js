import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUp extends Component {
  render() {
    return (
      <div>
        <h2>Sign Up</h2>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="password" placeholder="confirm password" />
          <input type="submit" />
        </form>
        <Link to='/login'>Already have an account?</Link>
      </div>
    );
  }
}

export default SignUp;
