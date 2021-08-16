import React, { useEffect } from 'react';

const LessonIndex = props => {
  console.log("Lesson Index Props")
  console.log(props)
  let { 
    session,
    currentUser,
    users,
    lessons,
    fetchUser,
    fetchAllUsers,
    fetchLessons,
  } = props;

  session = session ? session : '';
  currentUser = currentUser ? currentUser : {};
  users = users ? users : [];
  lessons = lessons ? lessons : [];

  useEffect(() => {
    fetchUser()
    fetchAllUsers()
    fetchLessons()
  }, []);
  
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
};

export default LessonIndex;