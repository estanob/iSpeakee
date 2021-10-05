import React, { useEffect } from 'react';
import FeedbackComment from './comments/feedback_comment';
import FeedbackModal from './modal/feedback_modal';

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

  let comments = studentFeedback;

  studentFeedback = studentFeedback.map(((comment, i) => {
    return (
      <FeedbackComment 
        comment={comment} 
        users={users} 
        key={i} commentIdx={i} inModal={false} />
    )
  }))
  
  console.log("Feedback Index Props", props)
  
  return (
    <div className="teacher-feedback info-box box-shadow" style={{ padding: '30px' }}>
      <div className="feedback-header">
        <h2>Lesson Feedback</h2>
        <button className="all-feedback-button">
          {`View all ${studentFeedback.length} feedback`}
        </button>
      </div>
      <div className="feedback-index-container">
        {studentFeedback}
      </div>
      <FeedbackModal comments={comments} users={users} />
    </div>
  )
}