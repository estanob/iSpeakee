import * as FeedbackCommentAPIUtil from '../util/feedback_comment_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ALL_FEEDBACK_COMMENTS = 'RECEIVE_ALL_FEEDBACK_COMMENTS';
export const RECEIVE_FEEDBACK_COMMENT = 'RECEIVE_FEEDBACK_COMMENT';
export const REMOVE_FEEDBACK_COMMENT = 'REMOVE_FEEDBACK_COMMENT';
export const RECEIVE_FEEDBACK_COMMENT_ERRORS = 'RECEIVE_FEEDBACK_COMMENT_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser,
  }
}

const receiveFeedbackComments = feedbackComments => ({
  type: RECEIVE_ALL_FEEDBACK_COMMENTS,
  feedbackComments
})

const receiveFeedbackComment = feedbackComment => ({
  type: RECEIVE_FEEDBACK_COMMENT,
  feedbackComment
})

const removeFeedbackComment = feedbackCommentId => ({
  type: REMOVE_FEEDBACK_COMMENT,
  feedbackCommentId
})

export const receiveErrors = errors => {
  return {
    type: RECEIVE_FEEDBACK_COMMENT_ERRORS,
    errors,
  }
}

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  }
};

export const fetchFeedbackComments = () => dispatch => {
  return FeedbackCommentAPIUtil.fetchFeedbackComments()
    .then(feedbackComments => {
      dispatch(receiveFeedbackComments(feedbackComments))
  })
}

export const fetchFeedbackComment = feedbackCommentId => dispatch => {
  return FeedbackCommentAPIUtil.fetchFeedbackComment(feedbackCommentId)
    .then(feedbackComment => dispatch(receiveFeedbackComment(feedbackComment)))
}

export const createFeedbackComment = feedbackComment => dispatch => {
  return FeedbackCommentAPIUtil.createFeedbackComment(feedbackComment)
    .then(createFeedbackComment => {
      dispatch(receiveFeedbackComment(createFeedbackComment))
      dispatch(clearErrors())
    })
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
}

export const updateFeedbackComment = feedbackComment => dispatch => {
  return FeedbackCommentAPIUtil.updateFeedbackComment(feedbackComment)
    .then(updatedFeedbackComment => {
      dispatch(receiveFeedbackComment(updatedFeedbackComment))
      dispatch(clearErrors())
    })
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
}

export const deleteFeedbackComment = feedbackCommentId => dispatch => (
  FeedbackCommentAPIUtil.deleteFeedbackComment(feedbackCommentId)
    .then(() => dispatch(removeFeedbackComment(feedbackCommentId)))
)