import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ProfileDropdown from '../profile_dropdown';

const Navbar = (props) => {
  const { session, logout } = props;

  function loggedIn() {
    if (session) {
      return (
        <div>
          <ProfileDropdown
            logout={logout}
            session={session} />
        </div>
      )
    } else {
      return (
        <div className="navbar-logged-out">
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
        <h3>
          <NavLink to="/" style={{ textDecoration: 'none', color: 'black' }}>
            iSpeakee
          </NavLink>
        </h3>
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
    </div>
  )
};

export default Navbar;