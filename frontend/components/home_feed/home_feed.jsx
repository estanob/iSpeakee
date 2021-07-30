import React from 'react';

const HomeFeed = (props) => {
  console.log("Home Page Props")
  console.log(props)
  const { logout } = props;
  return (
    <div>
      <h1>
        Welcome!
      </h1>
      <button onClick={logout}>Logout</button>
    </div>
  )
};

export default HomeFeed;