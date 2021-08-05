import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Dashboard from './dashboard';

const mSTP = (state) => {
  let session = state.session.id ? state.session.id : '';
  let currentUser = (state.session.id && state.entities.user) ? state.entities.user[state.session.id] : {};
  return {
    session: session,
    currentUser: currentUser,
  };
};

const mDTP = dispatch => {
  return {
    logout: () => dispatch(logout()),
  }
}

export default connect(mSTP, mDTP)(Dashboard);