import React, { useState } from 'react';
import { closeModal } from '../../../actions/modal_actions';
import FeedbackComment from '../comments/feedback_comment';

export default function FeedbackModal (props) {
  let [modalDisplay, setModalDisplay] = useState(true);

  let { comments, users, showModal } = props;
  
  comments = comments ? comments : [];
  users = users ? users : [];
  showModal = showModal ? showModal : false;
  
  const closeButton = 
    <button className="modal-close" onClick={() => setModalDisplay(false)}>
      <img 
        src="https://scdn.italki.com/orion/static/media/cross_icon.ad79cc7a.svg" 
        alt="close" />
    </button>;

  console.log("Feedback Modal Props: ", props)
  
  comments = comments.map((comment, i) => {
    return (
      <FeedbackComment comment={comment} users={users} key={i} commentIdx={i} inModal={true} />
    )
  })
  
  if (!showModal) return null;
  if (!modalDisplay) return null;
  
  return (
    <div className="modal-background">
      <div className="feedback-modal">
        <div className="feedback-modal-header">
          <span>{`${comments.length} Feedback`}</span>
          {closeButton}
        </div>
        <ul className="feedback-modal-ul">
          {comments}
        </ul>
      </div>
    </div>
  )
}