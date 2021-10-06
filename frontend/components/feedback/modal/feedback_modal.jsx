import React from 'react';
import FeedbackComment from '../comments/feedback_comment';

export default function FeedbackModal (props) {
  let { comments, users, showModal, closeModal } = props;
  
  comments = comments ? comments : [];
  users = users ? users : [];
  showModal = showModal ? showModal : false;
  
  const closeButton = 
    <button className="modal-close" onClick={closeModal}>
      <img 
        src="https://scdn.italki.com/orion/static/media/cross_icon.ad79cc7a.svg" 
        alt="close" />
    </button>;

  console.log("Feedback Modal Props: ", props)
  
  comments = comments.map((comment, i) => {
    return (
      <FeedbackComment 
        comment={comment} 
        users={users} 
        key={i} 
        commentIdx={i} 
        inModal={true} />
    )
  })
  
  if (!showModal) return null;
  
  return (
    <>
      <div className="modal-background" onClick={closeModal}>
      </div>
      <div className="feedback-modal">
        <div className="feedback-modal-header">
          <span>{`${comments.length} Feedback`}</span>
          {closeButton}
        </div>
        <ul className="feedback-modal-ul">
          {comments}
        </ul>
      </div>
    </>
  )
}