import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../../actions/post_actions';
import { fetchAllUsers, fetchUser } from '../../../actions/profile_actions';
import PostIndex from './post_index';

const mSTP = state => {
  let session = state.session.id ? state.session.id : '';
  let currentUser = (state.session.id && state.entities.user) ? state.entities.user[state.session.id] : {};
  let users = state.entities.users ? Object.values(state.entities.users) : [];
  let posts = state.entities.posts ? Object.values(state.entities.posts) : [];
  let noPostIcon = <svg width="81" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M80.5 40c0 22.091-17.909 40-40 40a39.833 39.833 0 01-25.155-8.898l.71-.71a38.84 38.84 0 0024.445 8.61c21.54 0 39.002-17.461 39.002-39.002a38.84 38.84 0 00-8.61-24.446l.71-.71A39.833 39.833 0 0180.5 40zM65.28 9.88A38.842 38.842 0 0040.5.998C18.959.998 1.498 18.459 1.498 40c0 9.41 3.332 18.043 8.882 24.78l-.709.71A39.837 39.837 0 01.5 40c0-22.092 17.908-40 40-40a39.837 39.837 0 0125.489 9.171l-.709.709z" fill="#BFBFBF"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M28.75 36.824l-9.318 2.497a2 2 0 00-1.414 2.45l3.395 12.671.817-.816-3.246-12.114a1 1 0 01.707-1.225l9.059-2.428v-1.035zm15.148 22.57a.998.998 0 01-.65.55l-17.065 4.572a1 1 0 01-1.225-.707l-.637-2.379-.817.817.488 1.82a2 2 0 002.45 1.415l17.065-4.573a2 2 0 001.439-1.515h-1.048z" fill="#BFBFBF"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M55.855 20h-25.11a2 2 0 00-2 2v25.11l1-1V22a1 1 0 011-1h24.11l1-1zm5.376 4.52l1-1v33.874a2 2 0 01-2 2H30.746a2 2 0 01-2-2v-.388l1-1v1.389a1 1 0 001 1H60.23a1 1 0 001-1V24.52z" fill="#BFBFBF"></path><path d="M72.249 7.848a.499.499 0 11.705.706L9.136 72.374a.499.499 0 11-.706-.706L72.25 7.848z" fill="#BFBFBF"></path></svg>;
  return {
    session: session,
    currentUser: currentUser,
    users: users,
    posts: posts,
    noPostIcon: noPostIcon,
  }
}

const mDTP = (dispatch, ownProps) => {
  return {
    fetchUser: () => dispatch(fetchUser(parseInt(ownProps.match.params.id))),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchPosts: () => dispatch(fetchPosts()),
  };
};

export default connect(mSTP, mDTP)(PostIndex);