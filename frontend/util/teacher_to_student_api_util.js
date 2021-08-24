export const fetchTeacherToStudents = () => {
  return $.ajax({
    url: `/api/teacher_to_students`,
    method: 'GET',
  });
};

export const createTeacherToStudent = teacherToStudent => {
  return $.ajax({
    url: `/api/teacher_to_students`,
    method: 'POST',
    data: teacherToStudent,
    contentType: false,
    processData: false,
  });
};

export const deleteTeacherToStudent = teacherToStudent => {
  return $.ajax({
    url: `/api/teacher_to_students`,
    method: 'DELETE',
    data: teacherToStudent,
  });
};

export const fetchTeacherToStudent = id => {
  return $.ajax({
    url: `/api/teacher_to_students/${id}`,
    method: 'GET',
  });
};