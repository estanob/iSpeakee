import React, { useEffect, useState } from 'react';
import LessonIndexItem from '../index_item/lesson_index_item';

export default function LessonIndex (props) {
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
    currentDate,
    currentTime,
  } = props;

  session = session ? session : '';
  currentDate = currentDate ? currentDate : '';
  currentTime = currentTime ? currentTime : '';
  currentUser = currentUser ? currentUser : {};
  users = users ? users : [];
  lessons = lessons ? lessons : [];
  let userLessons = [];
  lessons.forEach(lesson => {
    if (lesson.student_id === session) userLessons.push(lesson)
  });

  let numUpcomingLessons = 0;

  userLessons.forEach(lesson => {
    const lessonDate = new Date(lesson.when).toLocaleDateString();
    const lessonTime = new Date(lesson.when).toLocaleTimeString();
    if (lessonDate > currentDate) {
      numUpcomingLessons++
    } else if (lessonDate === currentDate && lessonTime > currentTime) {
      numUpcomingLessons++
    }
  })

  userLessons = userLessons.map((lesson, i) => {
    return (
      <LessonIndexItem 
        currentDate={currentDate} 
        currentTime={currentTime} 
        lesson={lesson} 
        key={i} />
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
    <div className="lesson-index">
      <div className="lesson-index-buttons">
        <button
          className={lessonStatus === "all" ? 'lesson-tab-selected' : ''}
          onClick={() => setLessonStatus('all')}>
            All
        </button>
        <button 
          className={lessonStatus === "upcoming" ? 'lesson-tab-selected' : ''} 
          onClick={() => setLessonStatus('upcoming')}>
            {`Upcoming • ${numUpcomingLessons}`}
        </button>
        <button 
          className={lessonStatus === "completed" ? 'lesson-tab-selected' : ''} 
          onClick={() => setLessonStatus('completed')}>
            Completed
        </button>
      </div>
      <div className="lessons-and-filter">
        <ul className="lessons-ul">{userLessons}</ul>
        <div className="lesson-filter">
          <h1>Lesson Filter will go here</h1>
        </div>
      </div>
    </div>
  )
};