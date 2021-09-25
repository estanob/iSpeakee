import React, { useState } from 'react';

export default function TeacherIndexPageItem (props) {
  let { 
    teacher,
    teacherProfiles,
    bookLesson,
    horizontalDots,
    verticalDots,
    redLine,
  } = props;
  
  teacher = teacher ? teacher : {};
  teacherProfiles = teacherProfiles ? teacherProfiles : {};
  bookLesson = bookLesson ? bookLesson : {};
  horizontalDots = horizontalDots ? horizontalDots : {};
  verticalDots = verticalDots ? verticalDots : {};
  redLine = redLine ? redLine : {};
  console.log("Teacher Index Page Item Props: ", props)

  let dotsButton = horizontalDots;

  let teacherProfile = teacherProfiles.find(profile => profile.teacher_id === teacher.id);
  teacherProfile = teacherProfile ? teacherProfile : {};
  
  console.log("Teacher Profile", teacherProfile)
  function setButton () {
    if (dotsButton === verticalDots) {
      dotsButton = horizontalDots;
    } else {
      dotsButton = verticalDots;
    }
  }

  let teacherName = teacher.display_name ? <p className="teacher-li-name">{`${teacher.display_name}`}</p> : <p className="teacher-li-name">{`${teacher.firstName} ${teacher.lastName}`}</p>
  return (
    <li className="teacher-card info-box" style={{ transition: 'all .25s ease-in' }}>
      <div className="teacher-details">
        <div className="teacher-lessons">
          <p className="teacher-lesson-count">
            {`${teacher.taughtLessons.length} LESSONS`}
          </p>
        </div>
        <div className="teacher-description">
          <h3>{teacherName}</h3>
          {redLine}
          <h1 className="language-title">Teaches</h1>
          <h1 className="language-title">Also Speaks</h1>
          <p style={{ marginBottom: '13px' }}>Hello</p>
          <h1 className="language-title">Hourly rate from</h1>
        </div>
        <div className="teacher-li-buttons">
          {bookLesson}
          <button onClick={() => setButton()} style={{ width: "36px", height: "36px", background: 'none', borderRadius: '0px' }}>
            {dotsButton}
          </button>
        </div>
      </div>
      <div className="teacher-info">
        <h1>Intro</h1>
        <p>
          <span>{teacherProfile.about_me}</span>
        </p>
      </div>
    </li>
  )
};