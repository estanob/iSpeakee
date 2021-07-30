import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import HomeFeed from './dashboard';

const mSTP = (state) => {
  debugger
  return {
    session: state.session.id
  };
};

const mDTP = dispatch => {
  return {
    logout: () => dispatch(logout()),
  }
}

export default connect(mSTP, mDTP)(HomeFeed);