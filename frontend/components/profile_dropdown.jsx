import React from 'react';
import { Link } from 'react-router-dom';


const ProfileDropdown = ({ logout, session }) => {
  session = session ? session : '';
  const triggerDropdown = () => {
    $('#profile-dropdown').toggleClass('trigger')
  };
  return (
    <div id="profile-pointer" onClick={triggerDropdown}>
      <span className='user-pic'></span>
      <ul id="profile-dropdown">
        <li>
          <Link to={`/user/${session}`} className='dropdown-link'>Profile</Link>
        </li>
        <br/>
        <li onClick={logout}>Logout</li>
      </ul>
    </div>
  );
};

export default ProfileDropdown;