import React, { useEffect } from 'react';

export default function FeedbackIndex (props) {
  let { 
    session,
    users,
    teacherToStudents,
    teacherProfiles,
    fetchUsers,
    fetchTeacherToStudents,
    fetchTeacherProfiles,
  } = props;

  session = session ? session : '';
  users = users ? users : [];
  teacherToStudents = teacherToStudents ? teacherToStudents : [];
  teacherProfiles = teacherProfiles ? teacherProfiles : [];

  useEffect(() => {
    fetchUsers()
    fetchTeacherToStudents()
    fetchTeacherProfiles()
  }, [])

  console.log("Feedback Index Props", props)
  
  debugger

  return (
    <div className="teacher-feedback info-box box-shadow">
      <h2>Lesson Feedback</h2>
    </div>
  )
}