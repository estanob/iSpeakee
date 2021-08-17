import React from 'react';

const LessonIndexItem = ({ lesson }) => {
  lesson = lesson ? lesson : {};
  console.log("Lesson Index Item: { Lesson }")
  console.log(lesson)

  let currentTime = new Date().toLocaleString();
  
  function determineLessonStatus(lesson) {
    if (currentTime < lesson.when) {
      return "upcoming"
    } else if (currentTime > lesson.when && currentTime > lesson.end_time) {
      return "completed"
    }
  }

  return (
    <div className="lesson-index-item">
      <div id={determineLessonStatus(lesson)}></div>
      <li className="individual-lesson">
        <p>{lesson.when}</p>
      </li>
    </div>
  )
}

export default LessonIndexItem;