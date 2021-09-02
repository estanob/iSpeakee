import React, { useEffect } from 'react';

const PostShow = props => {
  console.log("Post Show Props")
  console.log(props)

  let { 
    post, 
    users, 
    fetchPost, 
    fetchAllUsers 
  } = props;

  post = post ? post : {};
  users = users ? users : [];
  
  useEffect(() => {
    fetchPost()
    fetchAllUsers()
  }, []);

  let creator = users.find(user => {
    if (user.id === post.creator_id) return user
  });

  creator = creator ? creator : {};

  return (
    <div className="post-show-container">
      <div className="post-content box-shadow">
        <h1>{`${creator.firstName} ${creator.lastName}`}</h1>
        <p className="post-text">
          {`${post.body}`}
        </p>
        <p className="post-creation">{`${post.created_at}`}</p>
      </div>
      <div className="post-creator-info box-shadow">
        <h1>{`${creator.firstName} ${creator.lastName}`}</h1>
        <div className="post-creator-language">
          <h1>LANGUAGE SKILLS</h1>
          <h1>LEARNING LANGUAGE</h1>
        </div>
      </div>
    </div>
  )
}

export default PostShow;