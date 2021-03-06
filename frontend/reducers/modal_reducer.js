const { OPEN_MODAL, CLOSE_MODAL } = require("../actions/modal_actions");

const modalReducer = (oldState = null, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return action.modal;
    case CLOSE_MODAL:
      return null;
    default:
      return oldState;
  };
};

export default modalReducer;