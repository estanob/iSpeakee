import React, { useEffect, useState } from 'react';
import { LessonIndexDropdowns } from '../../dropdowns/lesson_index_dropdowns';
import LessonIndexItem from '../index_item/lesson_index_item';

export default function LessonIndex (props) {
  const [lessonStatus, setLessonStatus] = useState('all');
  const [indexContent, setIndexContent] = useState('all');
  const [whichLanguages, setWhichLanguages] = useState('all');
  const [whichTeacher, setWhichTeacher] = useState('all');
  let { 
    session,
    currentUser,
    users,
    lessons,
    languages,
    fetchAllUsers,
    fetchLessons,
    fetchLanguages,
    currentDate,
    currentTime,
  } = props;

  session = session ? session : '';
  currentDate = currentDate ? currentDate : '';
  currentTime = currentTime ? currentTime : '';
  currentUser = currentUser ? currentUser : {};
  users = users ? users : [];
  lessons = lessons ? lessons : [];
  languages = languages ? languages : [];
  let userLessons = [];
  let upcomingLessons = [];
  let completedLessons = [];
  lessons.forEach(lesson => {
    if (lesson.student_id === session) userLessons.push(lesson)
  });

  const userTeachers = currentUser ? currentUser.teachers : [];
  const userLanguages = currentUser ? currentUser.languagesLearning : [];

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
  
  const lessonLanguageIds = [];
  userLessons.forEach(lesson => {
    if (!lessonLanguageIds.includes(lesson.language_id)) {
      lessonLanguageIds.push(lesson.language_id)
    };
  });
  
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


  useEffect(() => {
    fetchAllUsers()
    fetchLessons()
    fetchLanguages()
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

  console.log("Lesson Index Props:", props)
  // console.log("Which Languages", whichLanguages)
  // console.log("Which Teacher", whichTeacher)
  console.log("Lesson Index User Teachers:", userTeachers)
  
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
          <div style={{ display: 'block', flex: '0 0 62.5%', maxWidth: '62.5%' }}>
            <ul className="lessons-ul">
              {lessonIndexContent()}
            </ul>
          </div>
          <div className="lesson-filter">
            <LessonIndexDropdowns 
              user={currentUser} 
              users={users}
              languages={languages} 
              userLanguages={currentUser.studiedLanguages} 
              lessonLanguageIds={lessonLanguageIds}
              userLessons={userLessons} 
              teachers={userTeachers} 
              whichTeacher={setWhichTeacher} 
              whichLanguages={setWhichLanguages} />
          </div>
        </div>
      </div>
    </div>
  )
};