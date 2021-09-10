import { connect } from 'react-redux';
import { fetchLanguages } from '../../../actions/language_actions';
import { fetchLesson } from '../../../actions/lesson_actions';
import { fetchAllUsers } from '../../../actions/profile_actions';
import LessonShow from './lesson_show';

const mSTP = (state, ownProps) => {
  let session = state.session ? state.session.id : '';
  let lesson = state.entities.lessons ? state.entities.lessons[ownProps.match.params.id] : {};
  let users = state.entities.users ? Object.values(state.entities.users) : [];
  let languages = state.entities.languages ? Object.values(state.entities.languages) : [];
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Saturday'];
  let currentDate = new Date ();
  let lessonDate = lesson ? new Date (lesson.when) : {};
  let isLessonCompleted = currentDate < lessonDate ? false : true;
  return {
    session: session,
    lesson: lesson,
    users: users,
    languages: languages,
    daysOfWeek: daysOfWeek,
    months: months,
    isLessonCompleted: isLessonCompleted,
  };
};

const mDTP = (dispatch, ownProps) => {
  return {
    fetchLesson: () => dispatch(fetchLesson(parseInt(ownProps.match.params.id))),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchLanguages: () => dispatch(fetchLanguages()),
  };
};

export default connect(mSTP, mDTP)(LessonShow);