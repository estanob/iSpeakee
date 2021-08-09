import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchUser } from '../../actions/profile_actions';

const Dashboard = (props) => {
  console.log("Dashboard Props")
  console.log(props)
  let { users, logout, session, currentUser, fetchUser, fetchAllUsers } = props;
  currentUser = currentUser ? currentUser : {};
  users = users ? users : [];

  useEffect(() => {
    fetchUser()
    fetchAllUsers()
  }, []);

  return (
    <div>
      <h1>
        Welcome!
      </h1>
      <button onClick={logout}>Logout</button>
      <div className="user-dashboard">
        <div className="acct-info">
          <h3>{`ID: ${session}`}</h3>
          <h3>{`${currentUser.firstName} ${currentUser.lastName}`}</h3>
          <p>{`0 Posts 0 Following 0 Followers`}</p>
        </div>
        <div className="class-info">
          <h1>Learning Language</h1>
          <div className="languages-learning">
            
            <h3>
              Completed Lessons
            </h3>
          </div>
          <h1>Upcoming Classes</h1>
          <h1>Teachers</h1>
          <Link to="/languages">
            Languages
          </Link>
        </div>
      </div>
    </div>
  )
};

export default Dashboard;