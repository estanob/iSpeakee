import React from 'react';

const HomeFeed = (props) => {
  console.log("Dashboard Props")
  console.log(props)
  const { logout, session } = props;
  return (
    <div>
      <h1>
        Welcome!
      </h1>
      <button onClick={logout}>Logout</button>
      <h3>{`ID: ${session}`}</h3>
    </div>
  )
};

export default HomeFeed;