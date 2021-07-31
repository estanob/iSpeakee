import { 
  RECEIVE_ALL_USERS,
  RECEIVE_USER
} from '../actions/profile_actions';

const ProfileReducer = (state={}, action) => {
  Object.freeze(state)
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_USER:
      debugger
      return action.user;
    case RECEIVE_ALL_USERS:
      debugger
      newState = Object.assign({}, action.users);
      return newState;
    default:
      return state;
  }
}

export default ProfileReducer;