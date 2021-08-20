import React from 'react';

const LessonIndexItem = ({ lesson }) => {
  lesson = lesson ? lesson : {};
  console.log("Lesson Index Item: { Lesson }")
  console.log(lesson)

  let currentDate = new Date().toLocaleDateString();
  let currentTime = new Date().toLocaleTimeString();
  let lessonStartTime = new Date(lesson.when).toLocaleTimeString();
  let lessonEndTime = new Date(lesson.end_time).toLocaleTimeString();
  let lessonStartDate = new Date(lesson.when).toLocaleDateString();
  let lessonEndDate = new Date(lesson.end_time).toLocaleDateString();

  let lessonStatus = '';
  
  function determineLessonStatus() {
    if (currentDate < lessonStartDate && currentTime < lessonStartTime) {
      lessonStatus = "Upcoming Lesson"
      return "upcoming"
    } else if (currentDate > lessonEndDate && currentTime > lessonEndTime) {
      lessonStatus = "Completed"
      return "completed"
    }
  }

  let lessonTime = new Date(lesson.when).toLocaleString();

  return (
    <div className="lesson-index-item">
      <div id={determineLessonStatus()}></div>
      <li className="individual-lesson">
        {/* <h1>{whichLessonStatus}</h1> */}
        <h1>{lessonStatus}</h1>
        <p>{lessonTime}</p>
      </li>
    </div>
  )
}

export default LessonIndexItem;