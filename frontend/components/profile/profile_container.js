import React from 'react';
import { connect } from 'react-redux';
import { fetchLanguages } from '../../actions/language_actions';
import { fetchLanguageToStudents } from '../../actions/language_to_student_actions';
import { fetchUser } from '../../actions/profile_actions';
import Profile from './profile';

const mSTP = state => {
  let languages = state.entities.languages ? Object.values(state.entities.languages) : [];
  let languageToStudents = state.entities.languageToStudents ? Object.values(state.entities.languageToStudents) : [];
  let currentUser = (state.session.id && state.entities.user) ? state.entities.user[state.session.id] : {};
  let lineSeparator = <div id="line-separator"></div>;
  let miniRedLine = <div id="redbar"></div>;
  return {
    languages: languages,
    languageToStudents: languageToStudents,
    currentUser: currentUser,
    lineSeparator: lineSeparator,
    miniRedLine: miniRedLine,
  };
};

const mDTP = (dispatch, ownProps) => {
  return {
    fetchUser: () => dispatch(fetchUser(parseInt(ownProps.match.params.id))),
    fetchLanguageToStudents: () => dispatch(fetchLanguageToStudents()),
    fetchLanguages: () => dispatch(fetchLanguages()),
  };
};

export default connect(mSTP, mDTP)(Profile);