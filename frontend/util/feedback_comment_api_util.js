export const fetchFeedbackComments = () => {
  return $.ajax({
    url: '/api/feedback_comments',
    method: 'GET',
  });
};

export const fetchFeedbackComment = feedbackCommentId => {
  return $.ajax({
    url: `/api/feedback_comments/${feedbackCommentId}`,
    method: 'GET',
  });
};

export const createFeedbackComment = feedbackComment => {
  return $.ajax({
    url: `/api/feedback_comments`,
    method: 'POST',
    data: feedbackComment,
    contentType: false,
    processData: false,
  });
};

export const updateFeedbackComment = feedbackComment => {
  return $.ajax({
    url: `/api/feedback_comments/${feedbackComment.id}`,
    method: 'PATCH',
    data: feedbackComment,
    contentType: false,
    processData: false,
  });
};

export const deleteFeedbackComment = feedbackCommentId => {
  return $.ajax({
    url: `/api/feedback_comments/${feedbackCommentId}`,
    method: 'DELETE',
  });
};
