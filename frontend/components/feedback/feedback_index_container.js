import { connect } from 'react-redux'
import { fetchFeedbackComments } from '../../actions/feedback_comment_actions';
import { fetchAllUsers } from '../../actions/profile_actions';
import { fetchTeacherProfiles } from '../../actions/teacher_profile_actions';
import { fetchTeacherToStudents } from '../../actions/teacher_to_student_actions';
import FeedbackIndex from './feedback_index';

const mSTP = state => {
  let session = state.session.id ? state.session.id : '';
  let users = state.entities.users ? Object.values(state.entities.users) : [];
  let teacherToStudents = state.entities.teacherToStudents ? Object.values(state.entities.teacherToStudents) : [];
  let teacherProfiles = state.entities.teacherProfiles ? Object.values(state.entities.teacherProfiles) : [];
  let feedbackComments = state.entities.feedbackComments ? Object.values(state.entities.feedbackComments) : [];
  return {
   session: session,
   users: users,
   teacherToStudents: teacherToStudents,
   teacherProfiles: teacherProfiles,
   feedbackComments: feedbackComments,
  }
};

const mDTP = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchAllUsers()),
    fetchTeacherToStudents: () => dispatch(fetchTeacherToStudents()),
    fetchTeacherProfiles: () => dispatch(fetchTeacherProfiles()),
    fetchFeedback: () => dispatch(fetchFeedbackComments()),
  }
};

export default connect(mSTP, mDTP)(FeedbackIndex);