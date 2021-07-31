import React from 'react';

const Dashboard = (props) => {
  console.log("Dashboard Props")
  console.log(props)
  const { logout, session, currentUser } = props;
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
          <h1>Upcoming Classes</h1>
          <h1>Teachers</h1>
        </div>
      </div>
    </div>
  )
};

export default Dashboard;