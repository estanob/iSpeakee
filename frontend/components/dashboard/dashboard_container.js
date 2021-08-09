import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchAllUsers } from '../../actions/profile_actions';
import Dashboard from './dashboard';

const mSTP = (state) => {
  let session = state.session.id ? state.session.id : '';
  let currentUser = (state.session.id && state.entities.user) ? state.entities.user[state.session.id] : {};
  let users = state.entities.users ? Object.values(state.entities.users) : [];
  return {
    session: session,
    currentUser: currentUser,
    users: users,
  };
};

const mDTP = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchAllUsers: () => dispatch(fetchAllUsers())
  }
}

export default connect(mSTP, mDTP)(Dashboard);