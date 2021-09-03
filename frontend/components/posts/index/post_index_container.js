import { connect } from 'react-redux';
import { fetchPosts } from '../../../actions/post_actions';
import { fetchUser } from '../../../actions/profile_actions';
import PostIndex from './post_index';

const mSTP = state => {
  let session = state.session.id ? state.session.id : '';
  let currentUser = (state.session.id && state.entities.user) ? state.entities.user[state.session.id] : {};
  let users = state.entities.users ? Object.values(state.entities.users) : [];
  let posts = state.entities.posts ? Object.values(state.entities.posts) : [];
  return {
    session: session,
    currentUser: currentUser,
    users: users,
    posts: posts,
  }
}

const mDTP = (dispatch, ownProps) => {
  return {
    fetchUser: () => dispatch(fetchUser(parseInt(ownProps.match.params.id))),
    fetchPosts: () => dispatch(fetchPosts()),
  };
};

export default connect(mSTP, mDTP)(PostIndex);