import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  console.log("Navbar Props")
  console.log(props)

  const { session, logout } = props;

  function loggedIn() {
    if (session) {
      return (
        <div>
          <button onClick={logout}>
            Logout
          </button>
        </div>
      )
    } else {
      return (
        <div>
          <Link to="/login">
            Login
          </Link>
          <Link to="/signup">
            Sign up
          </Link>
        </div>
      )
    }
  };

  return (
    <div className="header-navbar">
      <div className="app-logo">
        <h3>iSpeaki 14 years</h3>
      </div>
      <div className="navbar-links">
        <a href="https://github.com/estanob">
          Github
        </a>
        <a href="https://linkedin.com/in/estanob">
          LinkedIn
        </a>
        <a href="https://angel.co/u/brandon-estano">
          AngelList
        </a>
        {loggedIn()}
      </div>
      {/* <div className="navbar-links">
        <a href="https://github.com/estanob">
          Github
        </a>
        <a href="https://linkedin.com/in/estanob">
          LinkedIn
        </a>
        <a href="https://angel.co/u/brandon-estano">
          AngelList
        </a>
        <Link to="/login">
          Login
        </Link>
        <Link to="/signup">
          Sign up
        </Link>
      </div> */}
    </div>
  )
};

export default Navbar;