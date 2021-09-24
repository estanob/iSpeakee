import {
  RECEIVE_ALL_TEACHER_PROFILES, 
  RECEIVE_TEACHER_PROFILE, 
  REMOVE_TEACHER_PROFILE
} from '../actions/teacher_profile_actions';

const TeacherProfilesReducer = (state = {}, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_ALL_TEACHER_PROFILES:
      nextState = Object.assign({}, action.teacherProfiles)
      return action.teacherProfiles;
    case RECEIVE_TEACHER_PROFILE:
      nextState[action.teacherProfile.id] = action.teacherProfile
      return nextState;
    case REMOVE_TEACHER_PROFILE:
      delete nextState[action.teacherProfileId]
      return nextState;
    default:
      return state;
  }
}

export default TeacherProfilesReducer;