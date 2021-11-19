import { connect } from 'react-redux';
import { demoLogin, login, logout } from '../../actions/session_actions';
import Navbar from './navbar';

const mSTP = state => {
  return {
    session: state.session.id,
  }
};

const mDTP = dispatch => {
  return {
    logout: () => dispatch(logout()),
    login: user => dispatch(login(user)),
    demoLogin: () => dispatch(demoLogin()),
  };
};

export default connect(mSTP, mDTP)(Navbar);