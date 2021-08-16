import { connect } from 'react-redux';
import { fetchLessons } from '../../../actions/lesson_actions';
import { fetchAllUsers, fetchUser } from '../../../actions/profile_actions';
import LessonIndex from './lesson_index';

const mSTP = state => {
  let session = state.session.id ? state.session.id : '';
  let currentUser = (state.session.id && state.entities.user) ? state.entities.user[state.session.id] : {};
  let users = state.entities.users ? Object.values(state.entities.users) : [];
  let lessons = state.entities.lessons ? Object.values(state.entities.lessons) : [];
  return {
    session: session,
    currentUser: currentUser,
    users: users,
    lessons: lessons,
  };
};

const mDTP = (dispatch, ownProps) => {
  return {
    fetchUser: () => dispatch(fetchUser(parseInt(ownProps.match.params.id))),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchLessons: () => dispatch(fetchLessons()),
  };
};

export default connect(mSTP, mDTP)(LessonIndex);