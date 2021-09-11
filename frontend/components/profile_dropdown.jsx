import React from 'react';
import { Link } from 'react-router-dom';


const ProfileDropdown = ({ logout, session }) => {
  session = session ? session : '';

  const triggerDropdown = () => {
    $('#profile-dropdown').toggleClass('trigger')
  };

  const cancelDropdown = () => {
    $('#profile-dropdown').removeClass('trigger')
  };
  
  return (
    <div id="profile-pointer" onMouseEnter={triggerDropdown} onMouseLeave={cancelDropdown}>
      <span className='user-pic'></span>
      <ul id="profile-dropdown">
        <li>
          <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><clipPath id="prefix__a"><path d="M0 0h24v24H0z"></path></clipPath><g clipPath="url(#prefix__a)"><path clipRule="evenodd" d="M22.62 11.051a.75.75 0 00-1.299.75l1.25 2.165a.75.75 0 001.3-.75zM3.5 5.75c0-.69.56-1.25 1.25-1.25h1.234A2.25 2.25 0 008 5.75h4.5a2.25 2.25 0 002.016-1.25h1.234c.69 0 1.25.56 1.25 1.25v4.568A6.253 6.253 0 0010.567 20H3.5zm15 0v5.095A6.25 6.25 0 1112.041 21.5H2.75a.75.75 0 01-.75-.75v-15A2.75 2.75 0 014.75 3h1.056A2.25 2.25 0 018 1.25h4.5A2.25 2.25 0 0114.694 3h1.056a2.75 2.75 0 012.75 2.75zM7.25 3.5A.75.75 0 018 2.75h4.5a.75.75 0 010 1.5H8a.75.75 0 01-.75-.75zm12.565 15.308a4.75 4.75 0 10-8.227-4.75 4.75 4.75 0 008.227 4.75z" fill="#333" fillRule="evenodd"></path></g></svg>
          <Link to="/lessons" className="dropdown-link">
            My Lessons
          </Link>
        </li>
        <li>
          <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" fill="#333"><clipPath id="prefix__a"><path d="M0 0h24v24H0z"></path></clipPath><g clipPath="url(#prefix__a)"><path clipRule="evenodd" d="M1.44 7.564c-1.211.686-1.176 2.441.06 3.078l2.75 1.417v5.008a2.75 2.75 0 001.598 2.496l3.323 1.534a6.75 6.75 0 005.658 0l3.323-1.534a2.75 2.75 0 001.598-2.497v-4.751l2.518-1.152c1.278-.585 1.38-2.363.176-3.09l-8.229-4.966a4.75 4.75 0 00-4.796-.066zm16.81 5.438l-4.346 1.988a4.75 4.75 0 01-4.152-.097L5.75 12.832v4.236c0 .487.284.93.726 1.135L9.8 19.736a5.25 5.25 0 004.4 0l3.324-1.534a1.25 1.25 0 00.726-1.135zM2.188 9.309a.25.25 0 01-.01-.44l7.98-4.523a3.25 3.25 0 013.282.045l8.229 4.966a.25.25 0 01-.025.442l-8.364 3.827a3.25 3.25 0 01-2.84-.066z" fillRule="evenodd"></path></g></svg>
          <p>My Teachers</p>
        </li>
        <li>
          <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" fill="#333"><path clipRule="evenodd" d="M8.5 6.25a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0zm3.5-5a5 5 0 100 10 5 5 0 000-10zm-6 11A2.75 2.75 0 003.25 15v7c0 .414.336.75.75.75h12A4.75 4.75 0 0020.75 18v-1A4.75 4.75 0 0016 12.25zM4.75 15c0-.69.56-1.25 1.25-1.25h10A3.25 3.25 0 0119.25 17v1A3.25 3.25 0 0116 21.25H4.75z" fillRule="evenodd"></path></svg>
          <Link to={`/user/${session}`} className='dropdown-link'>
            Profile
          </Link>
        </li>
        <br/>
        <li onClick={logout}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#333333" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.75 5.5C3.75 4.80964 4.30964 4.25 5 4.25H11C11.4142 4.25 11.75 3.91421 11.75 3.5C11.75 3.08579 11.4142 2.75 11 2.75H5C3.48122 2.75 2.25 3.98122 2.25 5.5V20.5C2.25 20.9142 2.58579 21.25 3 21.25H11C11.4142 21.25 11.75 20.9142 11.75 20.5C11.75 20.0858 11.4142 19.75 11 19.75H3.75V5.5ZM15.4697 6.46967C15.7626 6.17678 16.2374 6.17678 16.5303 6.46967L21.5303 11.4697C21.6022 11.5416 21.6565 11.6245 21.6931 11.7129C21.7298 11.8013 21.75 11.8983 21.75 12C21.75 12.1919 21.6768 12.3839 21.5303 12.5303L16.5303 17.5303C16.2374 17.8232 15.7626 17.8232 15.4697 17.5303C15.1768 17.2374 15.1768 16.7626 15.4697 16.4697L19.1893 12.75H9C8.58579 12.75 8.25 12.4142 8.25 12C8.25 11.5858 8.58579 11.25 9 11.25H19.1893L15.4697 7.53033C15.1768 7.23744 15.1768 6.76256 15.4697 6.46967Z"></path></svg>
          <p>Logout</p>
        </li>
      </ul>
    </div>
  );
};

export default ProfileDropdown;