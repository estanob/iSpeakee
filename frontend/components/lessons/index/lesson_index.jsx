import React, { useEffect, useState } from 'react';
import LessonDropdown from '../dropdown/lesson_dropdown';
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

  let dateNow = new Date();
  let numUpcomingLessons = 0;

  userLessons.filter(lesson => {
    const lessonTime = new Date (lesson.when);
    if (dateNow < lessonTime) {
      upcomingLessons.push(lesson)
    }
  })

  userLessons.filter(lesson => {
    const lessonEndTime = new Date (lesson.end_time);
    if (dateNow > lessonEndTime) {
      completedLessons.push(lesson)
    }
  })
  
  upcomingLessons.sort((a, b) => (a.when < b.when) ? -1 : 1)
  completedLessons.sort((a, b) => (a.when > b.when) ? -1 : 1)

  userLessons = [].concat(upcomingLessons, completedLessons)
  
  userLessons = userLessons.map((lesson, i) => {
    return (
      <LessonIndexItem 
        users={users}
        fetchAllUsers={fetchAllUsers}
        currentDate={new Date ()} 
        lesson={lesson} 
        key={i} />
    )
  });

  upcomingLessons = upcomingLessons.map((lesson, i) => {
    return (
      <LessonIndexItem 
        users={users}
        fetchAllUsers={fetchAllUsers}
        currentDate={new Date ()} 
        lesson={lesson} 
        key={i} />
    )
  });

  completedLessons = completedLessons.map((lesson, i) => {
    return (
      <LessonIndexItem 
        users={users}
        fetchAllUsers={fetchAllUsers}
        currentDate={new Date ()} 
        lesson={lesson} 
        key={i} />
    )
  });

  let dropdownMenu = <LessonDropdown />;

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
        </button>
        <button 
          className={lessonStatus === "completed" ? 'lesson-tab-selected' : ''} 
          onClick={() => setCompleted()}>
            Completed
        </button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="lessons-and-filter" style={{ width: '960px' }}>
          <div style={{ display: 'block', flex: '0 0 62.5%', minWidth: '768px', maxWidth: '62.5%' }}>
            <ul className="lessons-ul">
              {lessonIndexContent()}
            </ul>
          </div>
          <div className="lesson-filter">
            {dropdownMenu}
          </div>
        </div>
      </div>
    </div>
  )
};