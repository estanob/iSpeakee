import * as TeacherToStudentAPIUtil from '../util/teacher_to_student_api_util';

export const RECEIVE_ALL_TEACHER_TO_STUDENTS = 'RECEIVE_ALL_TEACHER_TO_STUDENTS';
export const RECEIVE_TEACHER_TO_STUDENT = 'RECEIVE_TEACHER_TO_STUDENT';
export const REMOVE_TEACHER_TO_STUDENT = 'REMOVE_TEACHER_TO_STUDENT';

export const receiveAllTeacherToStudents = teacherToStudents => {
  return {
    type: RECEIVE_ALL_TEACHER_TO_STUDENTS,
    teacherToStudents,
  };
};

export const receiveTeacherToStudent = teacherToStudent => {
  return {
    type: RECEIVE_TEACHER_TO_STUDENT,
    teacherToStudent,
  };
};

export const removeTeacherToStudent = teacherToStudent => {
  return {
    type: REMOVE_TEACHER_TO_STUDENT,
    teacherToStudent,
  };
};

export const fetchTeacherToStudents = () => dispatch => {
  return TeacherToStudentAPIUtil.fetchTeacherToStudents()
    .then(teacherToStudents => {
      dispatch(receiveAllTeacherToStudents(teacherToStudents))
    });
};

export const createTeacherToStudent = teacherToStudent => dispatch => {
  return TeacherToStudentAPIUtil.createTeacherToStudent(teacherToStudent)
    .then(newTeacherToStudent => {
      dispatch(receiveTeacherToStudent(newTeacherToStudent))
    });
};

export const deleteTeacherToStudent = teacherToStudent => dispatch => {
  return TeacherToStudentAPIUtil.deleteTeacherToStudent(teacherToStudent)
    .then(() => {
      dispatch(removeTeacherToStudent(teacherToStudent))
    });
};