import React from 'react';
import { connect } from 'react-redux';
import { fetchAllUsers } from '../../../actions/profile_actions';
import { fetchTeacherToStudents } from '../../../actions/teacher_to_student_actions';
import TeacherIndex from './teacher_index';

const mSTP = state => {
  let users = state.entities.users ? Object.values(state.entities.users) : [];
  let teacherToStudents = state.entities.teacherToStudents ? Object.values(state.entities.teacherToStudents) : [];
  return {
    users: users,
    teacherToStudents: teacherToStudents,
  }
};

const mDTP = (dispatch, ownProps) => {
  return {
    fetchUsers: () => dispatch(fetchAllUsers()),
    fetchTeacherToStudents: () => dispatch(fetchTeacherToStudents()),
  }
};

export default connect (mSTP, mDTP)(TeacherIndex);