import React from 'react';
import { Link } from 'react-router-dom';

export default function FeedbackComment (props) {
  let { comment, users, inModal } = props;
  comment = comment ? comment : {};
  users = users ? users : [];
  inModal = inModal ? inModal : false;
  console.log("Feedback Comment Props", props)
  
  let teacher = users.find(teacher => teacher.id === comment.teacherId);
  teacher = teacher ? teacher : {};
  let teacherName = teacher ? <p style={{ fontSize: '14px' }}>{teacher.display_name}</p> : <p style={{ fontSize: '14px' }}>{`${teacher.firstName} ${teacher.lastName}`}</p>;
  teacherName = teacherName ? teacherName : "";
  console.log("This is the teacher that wrote the feedback:", teacher)
  
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