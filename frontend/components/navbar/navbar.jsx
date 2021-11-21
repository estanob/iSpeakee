import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ProfileDropdown from '../profile_dropdown';
import LoginModal from '../session_form/login_modal';

const Navbar = (props) => {
  let [modalShown, setModalShown] = useState(false);
  let { login, session, logout, demoLogin, closeButton, } = props;
  closeButton = closeButton ? closeButton : {};

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
          <button onClick={() => setModalShown(true)}>Login Modal</button>
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
      <LoginModal 
        demoLogin={demoLogin}
        displayModal={modalShown}
        closeModal={() => setModalShown(false)}
        closeButton={closeButton}
        login={login} 
        logout={logout} />
    </div>
  )
};

export default Navbar;