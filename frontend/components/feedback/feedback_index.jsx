import React, { useEffect } from 'react';

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

  useEffect(() => {
    fetchUsers()
    fetchTeacherToStudents()
    fetchTeacherProfiles()
    fetchFeedback()
  }, [])

  console.log("Feedback Index Props", props)
  
  return (
    <div className="teacher-feedback info-box box-shadow">
      <h2>Lesson Feedback</h2>
    </div>
  )
}