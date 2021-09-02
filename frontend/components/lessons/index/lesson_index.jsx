import React, { useEffect, useState } from 'react';
import LessonIndexItem from '../index_item/lesson_index_item';

export default function LessonIndex (props) {
  let [lessonStatus, setLessonStatus] = useState('all')
  let [indexContent, setIndexContent] = useState('all')
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
  let upcomingLessons = [];
  let completedLessons = [];
  lessons.forEach(lesson => {
    if (lesson.student_id === session) userLessons.push(lesson)
  });

  let numUpcomingLessons = 0;

  userLessons.filter(lesson => {
    const lessonStartDate = new Date(lesson.when).toLocaleDateString();
    const lessonStartTime = new Date(lesson.when).toLocaleTimeString();
    if (currentDate < lessonStartDate || (currentDate === lessonStartDate && currentTime < lessonStartTime)) {
      upcomingLessons.push(lesson)
    }
    // if ((lessonDate > currentDate) || (lessonDate === currentDate && lessonTime > currentTime)) {
    //   numUpcomingLessons++;
    //   upcomingLessons.push(lesson);
    // } else if (lessonDate >= currentDate && lessonTime < currentTime) {
    //   completedLessons.push(lesson);
    // }
  })

  userLessons.filter(lesson => {
    const lessonEndDate = new Date(lesson.end_time).toLocaleDateString();
    const lessonEndTime = new Date(lesson.end_time).toLocaleTimeString();
    if (currentDate > lessonEndDate || (currentDate === lessonEndDate && currentTime > lessonEndTime)) {
      completedLessons.push(lesson)
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

  upcomingLessons = upcomingLessons.map((lesson, i) => {
    return (
      <LessonIndexItem 
        currentDate={currentDate} 
        currentTime={currentTime} 
        lesson={lesson} 
        key={i} />
    )
  });

  completedLessons = completedLessons.map((lesson, i) => {
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

  const lessonIndexContent = () => {
    if (indexContent === 'all') {
      return userLessons;
    } else if (indexContent === 'completed') {
      return completedLessons;
    } else if (indexContent === 'upcoming') {
      return upcomingLessons;
    }
  }

  const setAll = () => {
    setLessonStatus('all')
    setIndexContent('all')
  }

  const setUpcoming = () => {
    setLessonStatus('upcoming')
    setIndexContent('upcoming')
  }

  const setCompleted = () => {
    setLessonStatus('completed')
    setIndexContent('completed')
  }
  
  return (
    <div className="lesson-index">
      <div className="lesson-index-buttons">
        <button
          className={lessonStatus === "all" ? 'lesson-tab-selected' : ''}
          onClick={() => setAll()}>
            All
        </button>
        <button 
          className={lessonStatus === "upcoming" ? 'lesson-tab-selected' : ''} 
          onClick={() => setUpcoming()}>
            {`Upcoming • ${upcomingLessons.length}`}
            {/* {`Upcoming • ${numUpcomingLessons}`} */}
        </button>
        <button 
          className={lessonStatus === "completed" ? 'lesson-tab-selected' : ''} 
          onClick={() => setCompleted()}>
            Completed
        </button>
      </div>
      <div className="lessons-and-filter">
        <ul className="lessons-ul">
          {lessonIndexContent()}
        </ul>
        <div className="lesson-filter">
          <h1>Lesson Filter will go here</h1>
        </div>
      </div>
    </div>
  )
};