import React, { useState } from 'react'
// import { Link } from 'react-router-dom';

const LoginModal = props => {
  const [user, setUser] = useState({ username: "", password: "" });
  let { displayModal, login, demoLogin, closeModal, } = props;

  function submitHandler (e) {
    e.preventDefault();
    login(user);
  };

  if (!displayModal) return null;
  
  return (
    <div className="login-form-container" onClick={closeModal}>
      <div className="login-form-child">
        <h1>Welcome to iSpeakee!</h1>
        <form style={{ zIndex: '500' }} className="login_form_div" onSubmit={submitHandler}>
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