import React from 'react';
import { Link } from 'react-router-dom';

const Splash = () => {
  return (
    <div className="splash-body">
      <div className="splash-header">
        <h1>iSpeaki</h1>
        <p>
          Learn a new language today!
        </p>
      </div>
      <footer>
        © iSpeaki - 2021
        Inspired by iTalki
      </footer>
    </div>
  )
}

export default Splash;