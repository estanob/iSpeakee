import { combineReducers } from 'redux';
import UserReducer from './user_reducer';
import ProfileReducer from './profile_reducer';

const entitiesReducer = combineReducers({
  user: UserReducer,
  users: ProfileReducer,
})

export default entitiesReducer;