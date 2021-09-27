import React from 'react';
import { Link } from 'react-router-dom';

const PostIndexItem = props => {
  let { post, users } = props;
  post = post ? post : {};
  users = users ? users : [];
  
  let creator = users.find(user => {
    if (post.creator_id === user.id) return user
  });

  creator = creator ? creator : {};
  console.log("Creator", creator)
  let creatorName = creator.display_name ? creator.display_name : `${creator.firstName} ${creator.lastName}`;
  creatorName = creatorName ? creatorName : {};
  let postDate = new Date (post.created_at).toLocaleString();
  console.log("Post Index Item Props", props)
  return (
    <li className="post-index-item-li">
      <h1>{creatorName}</h1>
      <p>{post.body}</p>
      <span>{postDate}</span>
    </li>
  );
};

export default PostIndexItem;