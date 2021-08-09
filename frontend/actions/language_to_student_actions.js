import * as LanguageToStudentAPIUtil from '../util/language_to_student_api_util';
import { RECEIVE_ALL_LANGUAGES } from './language_actions';

export const RECEIVE_ALL_LANGUAGE_TO_STUDENTS = 'RECEIVE_ALL_LANGUAGE_TO_STUDENTS';
export const RECEIVE_LANGUAGE_TO_STUDENT = 'RECEIVE_LANGUAGE_TO_STUDENT';
export const REMOVE_LANGUAGE_TO_STUDENT = 'REMOVE_LANGUAGE_TO_STUDENT';

export const receiveAllLanguageToStudents = languageToStudents => {
  return {
    type: RECEIVE_ALL_LANGUAGE_TO_STUDENTS,
    languageToStudents,
  };
};

export const receiveLanguageToStudent = languageToStudent => {
  return {
    type: RECEIVE_LANGUAGE_TO_STUDENT,
    languageToStudent,
  };
};

export const removeLanguageToStudent = languageToStudent => {
  return {
    type: REMOVE_LANGUAGE_TO_STUDENT,
    languageToStudent,
  };
};

export const fetchLanguageToStudents = () => dispatch => {
  return LanguageToStudentAPIUtil.fetchLanguageToStudents()
    .then(languageToStudents => {
      dispatch(receiveAllLanguageToStudents(languageToStudents))
    });
};

export const createLanguageToStudent = languageToStudent => dispatch => {
  return LanguageToStudentAPIUtil.createLanguageToStudent(languageToStudent)
    .then(newLanguageToStudent => {
      dispatch(receiveLanguageToStudent(newLanguageToStudent))
    });
};

export const deleteLanguageToStudent = languageToStudent => dispatch => {
  return LanguageToStudentAPIUtil.deleteLanguageToStudent(languageToStudent)
    .then(() => {
      dispatch(removeLanguageToStudent(languageToStudent))
    });
};