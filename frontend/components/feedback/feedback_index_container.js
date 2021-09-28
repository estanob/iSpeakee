import { connect } from 'react-redux'
import { fetchAllUsers } from '../../actions/profile_actions';
import { fetchTeacherProfiles } from '../../actions/teacher_profile_actions';
import { fetchTeacherToStudents } from '../../actions/teacher_to_student_actions';
import FeedbackIndex from './feedback_index';

const mSTP = state => {
  let session = state.session.id ? state.session.id : '';
  let users = state.entities.users ? Object.values(state.entities.users) : [];
  let teacherToStudents = state.entities.teacherToStudents ? Object.values(state.entities.teacherToStudents) : [];
  let teacherProfiles = state.entities.teacherProfiles ? Object.values(state.entities.teacherProfiles) : [];
  return {
   session: session,
   users: users,
   teacherToStudents: teacherToStudents,
   teacherProfiles: teacherProfiles,
  }
};

const mDTP = dispatch => {
  debugger
  return {
    fetchUsers: () => dispatch(fetchAllUsers()),
    fetchTeacherToStudents: () => dispatch(fetchTeacherToStudents()),
    fetchTeacherProfiles: () => dispatch(fetchTeacherProfiles()),
  }
};

export default connect(mSTP, mDTP)(FeedbackIndex);