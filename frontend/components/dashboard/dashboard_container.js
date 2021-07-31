import { connect } from 'react-redux';
import { fetchAllUsers } from '../../actions/profile_actions';
import { logout } from '../../actions/session_actions';
import HomeFeed from './dashboard';

const mSTP = (state) => {
  debugger
  return {
    session: state.session.id,
    users: state.entities.users ? Object.values(state.entities.users) : [],
  };
};

const mDTP = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
  }
}

export default connect(mSTP, mDTP)(HomeFeed);