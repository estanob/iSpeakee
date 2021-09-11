import React from 'react';
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
  let messageIcon = <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" fill="#333"><path clip-rule="evenodd" d="M13.9 2.25c4.593 0 8.35 3.75 8.35 8.34 0 3.4-1.849 5.85-4.214 7.652-2.349 1.79-5.29 3.009-7.658 3.954A.75.75 0 019.35 21.5v-2.604c-4.245-.382-7.6-3.97-7.6-8.306 0-4.59 3.757-8.34 8.35-8.34zm6.85 8.34c0-3.76-3.083-6.84-6.85-6.84h-3.8c-3.767 0-6.85 3.08-6.85 6.84 0 3.759 3.083 6.84 6.85 6.84a.75.75 0 01.75.75v2.208c2.121-.872 4.418-1.922 6.277-3.339 2.147-1.636 3.623-3.692 3.623-6.46zM8 12a1 1 0 100-2 1 1 0 000 2zm4 0a1 1 0 100-2 1 1 0 000 2zm5-1a1 1 0 11-2 0 1 1 0 012 0z" fill-rule="evenodd"></path></svg>;
  let currentDate = new Date ();
  let lessonDate = lesson ? new Date (lesson.when) : {};
  let isLessonCompleted = currentDate < lessonDate ? false : true;
  let testIcon = <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" fill="#333"><g clip-rule="evenodd" fill-rule="evenodd"><path d="M3.25 5A2.75 2.75 0 016 2.25h12A2.75 2.75 0 0120.75 5v11A5.75 5.75 0 0115 21.75H4a.75.75 0 01-.75-.75zM6 3.75c-.69 0-1.25.56-1.25 1.25v15.25H15A4.25 4.25 0 0019.25 16V5c0-.69-.56-1.25-1.25-1.25z"></path><path d="M17.53 6.47a.75.75 0 010 1.06l-2.5 2.5a.75.75 0 01-1.06 0l-1-1a.75.75 0 011.06-1.06l.47.47 1.97-1.97a.75.75 0 011.06 0zM16.398 13.768a.75.75 0 00-1.06-1.06l-.708.706-.707-.707a.75.75 0 00-1.06 1.06l.706.708-.707.707a.75.75 0 101.06 1.06l.708-.707.707.708a.75.75 0 001.06-1.061l-.706-.707z"></path></g></svg>;
  return {
    session: session,
    lesson: lesson,
    messageIcon: messageIcon,
    users: users,
    languages: languages,
    testIcon: testIcon,
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