import { connect } from 'react-redux';
import { fetchUser, fetchAllUsers } from '../../actions/profile_actions';
import Dashboard from './dashboard';

const mSTP = (state) => {
  let session = state.session.id ? state.session.id : '';
  let currentUser = (state.session.id && state.entities.user) ? state.entities.user[state.session.id] : {};
  let users = state.entities.users ? Object.values(state.entities.users) : [];
  return {
    session: session,
    currentUser: currentUser,
    users: users,
    currentDate: new Date().toLocaleDateString(),
    currentTime: new Date().toLocaleTimeString(),
  };
};

const mDTP = (dispatch, ownProps) => {
  return {
    fetchUser: () => dispatch(fetchUser(parseInt(ownProps.match.params.id))),
    fetchAllUsers: () => dispatch(fetchAllUsers())
  }
}

export default connect(mSTP, mDTP)(Dashboard);