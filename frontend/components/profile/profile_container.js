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
  let beginnerLevelDescription = 
    <span className="beginner-description hidden">
      A1: Beginner
    </span>;
  let beginnerLevelA1 = 
    <span className="language-level-indicator-box" gap="5">
      <span className="language-level-container" placement="bottom">
        <span className="language-level-reference" onMouseEnter={() => beginnerLevelDescription.props.className = 'beginner-description'}>
          <div style={{ boxSizing: 'border-box' }}>
            <span className="level grey-level-color"></span>
            <span className="level grey-level-color"></span>
            <span className="level grey-level-color"></span>
            <span className="level grey-level-color"></span>
            <span className="level grey-level-color"></span>
          </div>
        </span>
      </span>
    </span>;

  debugger
  return {
    languages: languages,
    languageToStudents: languageToStudents,
    currentUser: currentUser,
    lineSeparator: lineSeparator,
    miniRedLine: miniRedLine,
    beginnerLevelA1: beginnerLevelA1,
    beginnerLevelDescription: beginnerLevelDescription,
    hovered: false,
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