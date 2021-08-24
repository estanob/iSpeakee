import {
  RECEIVE_ALL_TEACHER_TO_STUDENTS,
  RECEIVE_TEACHER_TO_STUDENT,
  REMOVE_TEACHER_TO_STUDENT,
} from '../actions/teacher_to_student_actions';

const TeacherToStudentsReducer = (state={}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_TEACHER_TO_STUDENTS:
      nextState = Object.assign({}, action.teacherToStudents)
      return nextState;
    case RECEIVE_TEACHER_TO_STUDENT:
      nextState[action.teacherToStudent.id] = action.teacherToStudent;
      return nextState;
    case REMOVE_TEACHER_TO_STUDENT:
      delete nextState[action.teacherToStudentId]
      return nextState;
    default:
      return state;
  };
};

export default TeacherToStudentsReducer;