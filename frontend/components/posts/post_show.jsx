import React, { useEffect } from 'react';

const PostShow = props => {
  console.log("Post Show Props")
  console.log(props)

  let { post, fetchPost, fetchAllUsers } = props;
  post = post ? post : {};

  useEffect(() => {
    fetchPost()
    fetchAllUsers()
  }, []);

  
  return (
    <div className="post-show-container">
      <div className="post-content">
        <h1>Hello</h1>
        <p className="post-text">
          {`${post.body}`}
        </p>
        <p className="post-creation">{`${post.created_at}`}</p>
      </div>
      <div className="post-creator-info">
        <h1>
          HELLO
        </h1>
      </div>
    </div>
  )
}

export default PostShow;