import React, { useEffect, useState } from 'react';
import LessonIndexItem from '../index_item/lesson_index_item';

const LessonIndex = props => {
  console.log("Lesson Index Props")
  console.log(props)
  let [lessonStatus, setLessonStatus] = useState('all')
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
  let userLessons = [];
  lessons.forEach(lesson => {
    if (lesson.student_id === session) userLessons.push(lesson)
  });

  userLessons = userLessons.map((lesson, i) => {
    return (
      <li clasName="lesson-index-item" key={i}>
        <LessonIndexItem lesson={lesson} />
      </li>
    )
  });

  useEffect(() => {
    fetchUser()
    fetchAllUsers()
    fetchLessons()
  }, []);
  
  console.log("User Lessons")
  console.log(userLessons)
  return (
    <div>
      <h1>Hello</h1>
      <ul className="lesson-index">{userLessons}</ul>
    </div>
  )
};

export default LessonIndex;