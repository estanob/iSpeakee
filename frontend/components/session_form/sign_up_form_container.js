import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, clearErrors, demoLogin } from '../../actions/session_actions';
import { closeModal, openModal } from '../../actions/modal_actions.js';

const mSTP = ({ errors }) => {
  return {
    errors: Object.values(errors.session),
    formType: 'signup'
  };
};

const mDTP = dispatch => {
  return {
    processForm: user => dispatch(signup(user)),
    demoLogin: () => dispatch(demoLogin()),
    otherForm: (
      <button onClick={() => dispatch(openModal('login'))}>
        Login
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mSTP, mDTP)(SessionForm)