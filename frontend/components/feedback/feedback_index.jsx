import React, { useEffect } from 'react';
import FeedbackComment from './comments/feedback_comment';

export default function FeedbackIndex (props) {
  let { 
    session,
    users,
    teacherToStudents,
    teacherProfiles,
    feedbackComments,
    fetchUsers,
    fetchTeacherToStudents,
    fetchTeacherProfiles,
    fetchFeedback,
  } = props;

  session = session ? session : '';
  users = users ? users : [];
  teacherToStudents = teacherToStudents ? teacherToStudents : [];
  teacherProfiles = teacherProfiles ? teacherProfiles : [];
  feedbackComments = feedbackComments ? feedbackComments : [];

  let studentFeedback = feedbackComments.filter(comment => comment.studentId === session);
  studentFeedback = studentFeedback.sort((a, b) => a.dateWritten > b.dateWritten ? -1 : 1)
  studentFeedback = studentFeedback.slice(0,4);
   
  console.log("Student Feedback", studentFeedback)
  
  useEffect(() => {
    fetchUsers()
    fetchTeacherToStudents()
    fetchTeacherProfiles()
    fetchFeedback()
  }, [])

  studentFeedback = studentFeedback.map(((comment, i) => {
    return (
      <FeedbackComment comment={comment} users={users} key={i} commentIdx={i} />
    )
  }))
  
  console.log("Feedback Index Props", props)
  
  return (
    <div className="teacher-feedback info-box box-shadow" style={{ padding: '30px' }}>
      <h2>Lesson Feedback</h2>
      <div className="feedback-index-container">
        {studentFeedback}
      </div>
    </div>
  )
}