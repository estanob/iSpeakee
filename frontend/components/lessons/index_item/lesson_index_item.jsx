import React from 'react';

const LessonIndexItem = ({ lesson }) => {
  lesson = lesson ? lesson : {};
  console.log("Lesson Index Item: { Lesson }")
  console.log(lesson)

  let currentTime = new Date().toLocaleString();
  
  function determineLessonStatus(lesson) {
    debugger
    if (currentTime < lesson.when) {
      debugger
      return "upcoming"
    } else if (currentTime > lesson.when && currentTime > lesson.end_time) {
      debugger
      return "completed"
    }
  }

  let lessonTime = new Date(lesson.when).toLocaleString();

  return (
    <div className="lesson-index-item">
      <div id={determineLessonStatus(lesson)}></div>
      <li className="individual-lesson">
        <p>{lessonTime}</p>
      </li>
    </div>
  )
}

export default LessonIndexItem;