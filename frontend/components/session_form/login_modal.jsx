import React, { useState } from 'react'
// import { Link } from 'react-router-dom';

const LoginModal = props => {
  const [user, setUser] = useState({ username: "", password: "" });
  let { displayModal, login, demoLogin, closeModal, } = props;

  function submitHandler (e) {
    e.preventDefault();
    login(user);
  };

  const closeButton = 
    <button type="button" aria-label="Close" className="ant-modal-close" onClick={closeModal}>
      <span className="ant-modal-close-x">
        <svg 
          fill="#333" 
          height="24" 
          viewBox="0 0 24 24" 
          width="24" 
          xmlns="http://www.w3.org/2000/svg" 
          className="ant-modal-close-icon">
          <path 
            clipRule="evenodd" 
            d="m5.5 4.4c-.3-.3-.8-.3-1.1 0s-.3.8 0 1.1l6.5 6.5-6.5 6.5c-.3.3-.3.8 0 1.1s.8.3 1.1 0l6.5-6.5 6.5 6.5c.3.3.8.3 1.1 0s.3-.8 0-1.1l-6.5-6.5 6.5-6.5c.3-.3.3-.8 0-1.1s-.8-.3-1.1 0l-6.5 6.5z" 
            fillRule="evenodd"></path>
        </svg>
      </span>
    </button>;

  if (!displayModal) return null;
  
  return (
    <div className="login-form-container">
      <div className="login-form-child">
        <h1>Welcome to iSpeakee!</h1>
        {closeButton}
        <form style={{ zIndex: '500' }} className="login-form-div" onSubmit={submitHandler}>
          <input 
            type="text"
            name="username"
            value={user.username}
            onChange={e => setUser({...user, username: e.target.value})}
            placeholder="Username"
            className="login-input" />
          <input 
            type="password"
            name="password"
            value={user.password}
            onChange={e => setUser({...user, password: e.target.value})}
            placeholder="Password"
            className="login-input" />
          <input className="session-submit" type="submit" value="Login" />
        </form>
        <p>No acount yet? <button>Sign up</button></p>
      </div>
    </div>
  );
};

export default LoginModal;