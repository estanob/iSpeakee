import React, { useEffect } from 'react';
import PostIndexItem from './post_index_item';

export default function PostIndex (props) {
  let {
    session, 
    currentUser, 
    users, 
    posts, 
    noPostIcon,
    fetchUser, 
    fetchAllUsers, 
    fetchPosts 
  } = props;
  
  session = session ? session : '';
  currentUser = currentUser ? currentUser : {};
  users = users ? users : [];
  posts = posts ? posts : [];
  noPostIcon = noPostIcon ? noPostIcon : {};

  useEffect(() => {
    fetchUser()
    fetchAllUsers()
    fetchPosts()
  }, []);

  let ownPosts = posts.filter(post => post.creator_id === session);
  
  console.log("Post Index Props", props)
  console.log("Own Posts", ownPosts)
  
  let postList = ownPosts.map((post, i) => {
    return (
      <PostIndexItem post={post} key={i} users={users} />
    )
  })
  
  return (
    <div className="post-index-container">
      <h1>Posts</h1>
      <ul className="post-index-ul info-box">
        {postList}
      </ul>
    </div>
  )
}