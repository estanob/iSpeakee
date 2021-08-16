import {
  RECEIVE_ALL_LESSONS,
  RECEIVE_LESSON,
  REMOVE_LESSON
} from '../actions/lesson_actions';

const LessonsReducer = (state = {}, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_ALL_LESSONS:
      nextState = Object.assign({}, action.lessons)
      return action.lessons;
    case RECEIVE_LESSON:
      nextState[action.lesson.id] = action.lesson
      return nextState
    case REMOVE_LESSON:
      delete nextState[action.lessonId]
      return nextState
    default:
      return state;
  }
}

export default LessonsReducer;