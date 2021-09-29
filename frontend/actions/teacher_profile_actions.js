import * as TeacherProfileAPIUtil from '../util/teacher_profile_api_util';

export const RECEIVE_ALL_TEACHER_PROFILES = 'RECEIVE_ALL_TEACHER_PROFILES';
export const RECEIVE_TEACHER_PROFILE = 'RECEIVE_TEACHER_PROFILE';
export const REMOVE_TEACHER_PROFILE = 'REMOVE_TEACHER_PROFILE';

const receiveTeacherProfiles = teacherProfiles => ({
  type: RECEIVE_ALL_TEACHER_PROFILES,
  teacherProfiles,
});

const receiveTeacherProfile = teacherProfile => ({
  type: RECEIVE_TEACHER_PROFILE,
  teacherProfile,
});

const removeTeacherProfile = teacherProfileId => ({
  type: REMOVE_TEACHER_PROFILE,
  teacherProfileId,
});

export const fetchTeacherProfiles = () => dispatch => {
  return TeacherProfileAPIUtil.fetchTeacherProfiles()
    .then(teacherProfiles => {
      dispatch(receiveTeacherProfiles(teacherProfiles))
    });
};

export const fetchTeacherProfile = teacherProfileId => dispatch => {
  return TeacherProfileAPIUtil.fetchTeacherProfile(teacherProfileId)
    .then(teacherProfile => dispatch(receiveTeacherProfile(teacherProfile)));
};

export const createTeacherProfile = teacherProfile => dispatch => {
  return TeacherProfileAPIUtil.createTeacherProfile(teacherProfile)
    .then(newProfile => dispatch(receiveTeacherProfile(newProfile)));
};

export const updateTeacherProfile = teacherProfile => dispatch => {
  return TeacherProfileAPIUtil.updateTeacherProfile(teacherProfile)
    .then(updatedTeacherProfile => dispatch(receiveTeacherProfile(updatedTeacherProfile)));
};

export const deleteTeacherProfile = teacherProfileId => dispatch => {
  return TeacherProfileAPIUtil.deleteTeacherProfile(teacherProfileId)
    .then(() => dispatch(removeTeacherProfile(teacherProfileId)));
};