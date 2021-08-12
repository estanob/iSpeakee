import { connect } from 'react-redux';
import { fetchPost } from '../../actions/post_actions';
import PostShow from './post_show';

const mSTP = ( state, ownProps ) => {
  let session = state.session.id ? state.session.id : '';
  let post = state.entities.posts ? state.entities.posts[ownProps.match.params.id] : {};
  return {
    session: session,
    post: post,
  };
};

const mDTP = (dispatch, ownProps) => {
  return {
    fetchPost: () => dispatch(fetchPost(parseInt(ownProps.match.params.id))),
  };
};

export default connect(mSTP, mDTP)(PostShow);