import {
  RECEIVE_ALL_FEEDBACK_COMMENTS, 
  RECEIVE_FEEDBACK_COMMENT, 
  REMOVE_FEEDBACK_COMMENT
} from '../actions/feedback_comment_actions';

const FeedbackCommentsReducer = (state = {}, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_ALL_FEEDBACK_COMMENTS:
      nextState = Object.assign({}, action.feedbackComments)
      return action.feedbackComments;
    case RECEIVE_FEEDBACK_COMMENT:
      nextState[action.feedbackComment.id] = action.feedbackComment
      return nextState;
    case REMOVE_FEEDBACK_COMMENT:
      delete nextState[action.feedbackCommentId]
      return nextState;
    default:
      return state;
  }
}

export default FeedbackCommentsReducer;