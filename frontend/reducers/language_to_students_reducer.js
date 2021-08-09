import {
  RECEIVE_ALL_LANGUAGE_TO_STUDENTS,
  RECEIVE_LANGUAGE_TO_STUDENT,
  REMOVE_LANGUAGE_TO_STUDENT,
} from '../actions/language_to_student_actions';

const LanguageToStudentsReducer = (state={}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_LANGUAGE_TO_STUDENTS:
      nextState = Object.assign({}, action.languageToStudents)
      return nextState;
    case RECEIVE_LANGUAGE_TO_STUDENT:
      nextState[action.languageToStudent.id] = action.languageToStudent;
      return nextState;
    case REMOVE_LANGUAGE_TO_STUDENT:
      delete nextState[action.languageToStudentId]
      return nextState;
    default:
      return state;
  };
};

export default LanguageToStudentsReducer;