import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import ProfileReducer from './profile_reducer';

const entitiesReducer = combineReducers({
  user: UsersReducer,
  users: ProfileReducer,
})

export default entitiesReducer;