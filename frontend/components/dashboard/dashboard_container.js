import { connect } from 'react-redux';
import { fetchAllUsers } from '../../actions/profile_actions';
import { logout } from '../../actions/session_actions';
import Dashboard from './dashboard';

const mSTP = (state) => {
  debugger
  let session = state.session.id ? state.session.id : '';
  let currentUser = session ? state.entities.user[session] : {};
  debugger
  return {
    session: session,
    currentUser: currentUser,
    users: state.entities.users ? Object.values(state.entities.users) : [],
  };
};

const mDTP = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
  }
}

export default connect(mSTP, mDTP)(Dashboard);