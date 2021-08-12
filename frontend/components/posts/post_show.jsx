import React, { useEffect } from 'react';

const PostShow = props => {
  console.log("Post Show Props")
  console.log(props)

  let { post, fetchPost } = props;
  post = post ? post : {};

  useEffect(() => {
    fetchPost()
  }, []);

  return (
    <div className="post-show-container">
      <h1>Hello</h1>
      <p>
        {`${post.body}`}
      </p>
      <p className="post-creation">{`${post.created_at}`}</p>
    </div>
  )
}

export default PostShow;