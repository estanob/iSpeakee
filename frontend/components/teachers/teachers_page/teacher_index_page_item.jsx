import React, { useState } from 'react';

export default function TeacherIndexPageItem (props) {
  let { 
    teacher,
    bookLesson,
    horizontalDots,
    verticalDots,
    redLine,
  } = props;
  
  teacher = teacher ? teacher : {};
  bookLesson = bookLesson ? bookLesson : {};
  horizontalDots = horizontalDots ? horizontalDots : {};
  verticalDots = verticalDots ? verticalDots : {};
  redLine = redLine ? redLine : {};
  console.log("Teacher Index Page Item Props: ", props)

  let dotsButton = horizontalDots;

  function setButton () {
    if (dotsButton === verticalDots) {
      dotsButton = horizontalDots;
    } else {
      dotsButton = verticalDots;
    }
  }

  let teacherName = teacher.display_name ? <p className="teacher-li-name">{`${teacher.display_name}`}</p> : <p className="teacher-li-name">{`${teacher.firstName} ${teacher.lastName}`}</p>
  return (
    <li className="teacher-index-li info-box" style={{ transition: 'all .25s ease-in' }}>
      <div className="teacher-details">
        <div className="teacher-description">
          <h3>{teacherName}</h3>
          {redLine}
          <h1>Teachers</h1>
          <h1>Also Speaks</h1>
          <h1>Hourly rate from</h1>
        </div>
        <div className="teacher-li-buttons">
          {bookLesson}
          <button onClick={() => setButton()}>
            {dotsButton}
          </button>
        </div>
      </div>
      <div style={{ background: 'black', height: '50px', width: '50px' }}></div>
    </li>
  )
};