import React from 'react';
import { Link } from 'react-router-dom';

export default function FeedbackComment (props) {
  let { comment, users } = props;
  comment = comment ? comment : {};
  users = users ? users : [];
  console.log("Feedback Comment Props", props)
  
  let teacher = users.find(teacher => teacher.id === comment.teacherId);
  teacher = teacher ? teacher : {};
  let teacherName = teacher ? <p style={{ fontSize: '14px' }}>{teacher.display_name}</p> : <p style={{ fontSize: '14px' }}>{`${teacher.firstName} ${teacher.lastName}`}</p>;
  teacherName = teacherName ? teacherName : "";
  console.log("This is the teacher that wrote the feedback:", teacher)
  
  return (
    <div className="feedback-container">
      <Link to={`/teacher/${teacher.id}`}
        style={{ textDecoration: 'none', color: 'black' }}>
        {teacherName}
      </Link>
      <span style={{ fontSize: '10px', color: "#777" }}>
        {comment.dateWritten}
      </span>
      <p className="comment-body">{comment.body}</p>
    </div>
  )
};