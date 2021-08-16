import { combineReducers } from 'redux';
import UserReducer from './user_reducer';
import ProfileReducer from './profile_reducer';
import LanguagesReducer from './languages_reducer';
import LanguageToStudentsReducer from './language_to_students_reducer';
import LessonsReducer from './lessons_reducer';
import PostsReducer from './posts_reducer';
import FollowsReducer from './follows_reducer';

const entitiesReducer = combineReducers({
  user: UserReducer,
  users: ProfileReducer,
  languages: LanguagesReducer,
  languageToStudents: LanguageToStudentsReducer,
  lessons: LessonsReducer,
  posts: PostsReducer,
  follows: FollowsReducer,
})

export default entitiesReducer;