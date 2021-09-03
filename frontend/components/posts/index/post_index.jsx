import React, { useEffect } from 'react';

export default function PostIndex (props) {
  let {
    session, 
    currentUser, 
    users, 
    posts, 
    fetchUser, 
    fetchPosts 
  } = props;
  
  session = session ? session : '';
  currentUser = currentUser ? currentUser : {};
  users = users ? users : [];
  posts = posts ? posts : [];

  useEffect(() => {
    fetchUser()
    fetchPosts()
  }, []);
  
  console.log("Props", props)
  
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}