export const fetchTeacherProfiles = () => {
  return $.ajax({
    url: '/api/teacher_profiles',
    method: 'GET',
  });
};

export const fetchTeacherProfile = teacherProfileId => {
  return $.ajax({
    url: `/api/teacher_profiles/${teacherProfileId}`,
    method: 'GET',
  });
};

export const createTeacherProfile = teacherProfile => {
  return $.ajax({
    url: `/api/teacher_profiles`,
    method: 'POST',
    data: teacherProfile,
    contentType: false,
    processData: false,
  });
};

export const updateTeacherProfile = teacherProfile => {
  return $.ajax({
    url: `/api/teacher_profiles/${teacherProfile.id}`,
    method: 'PATCH',
    data: teacherProfile,
    contentType: false,
    processData: false,
  });
};

export const deleteTeacherProfile = teacherProfileId => {
  return $.ajax({
    url: `/api/teacher_profiles/${teacherProfileId}`,
    method: 'DELETE',
  });
};
