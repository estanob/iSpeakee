import React from 'react';
import { Link } from 'react-router-dom';

export default function FeedbackComment (props) {
  let { comment, users, inModal } = props;
  comment = comment ? comment : {};
  users = users ? users : [];
  inModal = inModal ? inModal : false;
  
  let teacher = users.find(teacher => teacher.id === comment.teacherId);
  teacher = teacher ? teacher : {};
  let teacherName = teacher.display_name ? <p style={{ fontSize: '14px' }}>{teacher.display_name}</p> : <p style={{ fontSize: '14px' }}>{`${teacher.firstName} ${teacher.lastName}`}</p>;
  teacherName = teacherName ? teacherName : '';
  
  let modalOrNot = inModal === false ? "feedback-container" : "feedback-container-modal";
  
  let nameOfTeacher = inModal === false ? 
      <Link to={`/teacher/${teacher.id}`}
        style={{ textDecoration: 'none', color: 'black' }}>
        {teacherName}
      </Link> :
      <h1>{teacherName}</h1>;
      
  return (
    <div className={modalOrNot}>
      {nameOfTeacher}
      <span style={{ fontSize: '10px', color: "#777" }}>
        {comment.dateWritten}
      </span>
      <p className="comment-body">{comment.body}</p>
    </div>
  )
};