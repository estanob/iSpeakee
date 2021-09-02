import { connect } from 'react-redux';
import { fetchPost } from '../../actions/post_actions';
import { fetchAllUsers } from '../../actions/profile_actions'
import PostShow from './post_show';

const mSTP = ( state, ownProps ) => {
  let session = state.session.id ? state.session.id : '';
  let post = state.entities.posts ? state.entities.posts[ownProps.match.params.id] : {};
  let users = state.entities.users ? Object.values(state.entities.users) : [];
  return {
    session: session,
    post: post,
    users: users,
  };
};

const mDTP = (dispatch, ownProps) => {
  return {
    fetchPost: () => dispatch(fetchPost(parseInt(ownProps.match.params.id))),
    fetchAllUsers: () => dispatch(fetchAllUsers())
  };
};

export default connect(mSTP, mDTP)(PostShow);