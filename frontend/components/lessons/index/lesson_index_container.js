import { connect } from 'react-redux';
import { fetchLessons } from '../../../actions/lesson_actions';
import { fetchAllUsers } from '../../../actions/profile_actions';
import { fetchLanguages } from '../../../actions/language_actions';
import LessonIndex from './lesson_index';

const mSTP = state => {
  let session = state.session.id ? state.session.id : '';
  let currentUser = (state.session.id && state.entities.user) ? state.entities.user[state.session.id] : {};
  let users = state.entities.users ? Object.values(state.entities.users) : [];
  let lessons = state.entities.lessons ? Object.values(state.entities.lessons) : [];
  let languages = state.entities.languages ? Object.values(state.entities.languages) : [];
  debugger
  return {
    session: session,
    currentUser: currentUser,
    users: users,
    lessons: lessons,
    languages: languages,
    currentDate: new Date().toLocaleDateString(),
    currentTime: new Date().toLocaleTimeString(),
  };
};

const mDTP = (dispatch, ownProps) => {
  return {
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchLessons: () => dispatch(fetchLessons()),
    fetchLanguages: () => dispatch(fetchLanguages()),
  };
};

export default connect(mSTP, mDTP)(LessonIndex);