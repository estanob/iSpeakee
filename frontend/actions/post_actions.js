import * as PostAPIUtil from '../util/post_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const RECEIVE_POST_ERRORS = 'RECEIVE_POST_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser,
  }
}

const receivePosts = posts => ({
  type: RECEIVE_ALL_POSTS,
  posts
})

const receivePost = post => ({
  type: RECEIVE_POST,
  post
})

const removePost = postId => ({
  type: REMOVE_POST,
  postId
})

export const receiveErrors = errors => {
  return {
    type: RECEIVE_POST_ERRORS,
    errors,
  }
}

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  }
};

export const fetchPosts = () => dispatch => {
  return PostAPIUtil.fetchPosts()
    .then(posts => {
      dispatch(receivePosts(posts))
  })
}

export const fetchPost = postId => dispatch => {
  return PostAPIUtil.fetchPost(postId)
    .then(post => dispatch(receivePost(post)))
}

export const createPost = post => dispatch => {
  return PostAPIUtil.createPost(post)
    .then(createPost => {
      dispatch(receivePost(createPost))
      dispatch(clearErrors())
    })
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
}

export const updatePost = post => dispatch => {
  return PostAPIUtil.updatePost(post)
    .then(updatedPost => {
      dispatch(receivePost(updatedPost))
      dispatch(clearErrors())
    })
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
}

export const deletePost = postId => dispatch => (
  PostAPIUtil.deletePost(postId)
    .then(() => dispatch(removePost(postId)))
)