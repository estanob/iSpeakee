import { RECEIVE_ALL_USERS } from '../actions/profile_actions';

const UsersReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      newState = Object.assign({}, action.users);
      return newState;
    default:
      return state;
  }
}

export default UsersReducer;