import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../../actions/profile_actions';
import { fetchTeacherProfiles } from '../../../actions/teacher_profile_actions';
import TeacherShow from './teacher_show';

const mSTP = ( state, ownProps ) => {
  let session = state.session.id ? state.session.id : '';
  let teacherProfiles = state.entities.teacherProfiles ? Object.values(state.entities.teacherProfiles) : [];
  let teacher = state.entities.users ? state.entities.users : {};
  let redLine = <div id="redbar"></div>;
  return {
    session: session,
    teacher: teacher,
    teacherProfiles: teacherProfiles,
    redLine: redLine,
  }
};

const mDTP = ( dispatch, ownProps ) => {
  return {
    fetchTeacher: () => dispatch(fetchUser(parseInt(ownProps.match.params.id))),
    fetchTeacherProfiles: () => dispatch(fetchTeacherProfiles()),
  }
};

export default connect(mSTP, mDTP)(TeacherShow);