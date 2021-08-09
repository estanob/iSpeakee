import { combineReducers } from 'redux';
import UserReducer from './user_reducer';
import ProfileReducer from './profile_reducer';
import LanguagesReducer from './languages_reducer';
import LanguageToStudentsReducer from './language_to_students_reducer';

const entitiesReducer = combineReducers({
  user: UserReducer,
  users: ProfileReducer,
  languages: LanguagesReducer,
  languageToStudents: LanguageToStudentsReducer,
})

export default entitiesReducer;