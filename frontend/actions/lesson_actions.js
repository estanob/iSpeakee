import * as LessonAPIUtil from '../util/lesson_api_util';

export const RECEIVE_ALL_LESSONS = 'RECEIVE_ALL_LESSONS';
export const RECEIVE_LESSON = 'RECEIVE_LESSON';
export const REMOVE_LESSON = 'REMOVE_LESSON';

const receiveLessons = lessons => {
  return {
    type: RECEIVE_ALL_LESSONS,
    lessons
  }
}

const receiveLesson = lesson => {
  return {
    type: RECEIVE_LESSON,
    lesson,
  };
};

const removeLesson = lesson => {
  return {
    type: REMOVE_LESSON,
    lesson,
  };
};

export const fetchLesson = lessonId => dispatch => {
  return LessonAPIUtil.fetchLesson(lessonId)
    .then(lesson => {
      dispatch(receiveLesson(lesson))
    })
}

export const fetchLessons = () => dispatch => {
  return LessonAPIUtil.fetchLessons()
    .then(lessons => {
      dispatch(receiveLessons(lessons))
    });
};

export const createLesson = lesson => dispatch => {
  return LessonAPIUtil.createLesson(lesson)
    .then(newLesson => {
      dispatch(receiveLesson(newLesson))
    });
};

export const deleteLesson = lesson => dispatch => {
  return LessonAPIUtil.deleteLesson(lesson)
    .then(() => dispatch(removeLesson(lesson)))
};