import React from 'react';

const LessonIndexItem = ({ lesson }) => {
  lesson = lesson ? lesson : {};
  console.log("Lesson Index Item: { Lesson }")
  console.log(lesson)

  let currentTime = new Date().toLocaleString();
  let currentTimeAsString = new Date().toDateString();
  let currentTimeAsISO = new Date().toISOString();
  let currentTimeAsLocaleTimeString = new Date().toLocaleTimeString();
  
  console.log("Time as string", currentTimeAsString)
  console.log("Time as ISO", currentTimeAsISO)
  console.log("Locale Time string", currentTimeAsLocaleTimeString)
  
  let lessonStatus = '';
  
  function determineLessonStatus(lesson) {
    if (currentTime < lesson.when) {
      lessonStatus = "Upcoming Lesson"
      return "upcoming"
    } else if (currentTime > lesson.when && currentTime > lesson.end_time) {
      lessonStatus = "Completed"
      return "completed"
    }
  }

  let lessonTime = new Date(lesson.when).toLocaleString();

  debugger
  return (
    <div className="lesson-index-item">
      <div id={determineLessonStatus(lesson)}></div>
      <li className="individual-lesson">
        <h1>{lessonStatus}</h1>
        <p>{lessonTime}</p>
      </li>
    </div>
  )
}

export default LessonIndexItem;