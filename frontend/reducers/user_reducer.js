import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const UserReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      // newState = Object.assign({}, action.user);
      // return newState;
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser })
    default:
      return state;
  }
}

export default UserReducer;