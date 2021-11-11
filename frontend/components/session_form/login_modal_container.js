import { connect } from 'react-redux';
import { demoLogin, login } from '../../actions/session_actions';
import LoginModal from './login_modal';

const mSTP = () => {
  return {
    displayModal: false,
  };
};

const mDTP = dispatch => {
  return {
    login: user => dispatch(login(user)),
    demoLogin: () => dispatch(demoLogin()),
  };
};

export default connect(mSTP, mDTP)(LoginModal);