import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const LessonIndexItem = props => {
  let { lesson, currentDate } = props;
  lesson = lesson ? lesson : {};
  currentDate = currentDate ? currentDate : '';

  let lessonStartTime = new Date(lesson.when);
  let lessonEndTime = new Date(lesson.end_time);

  let lessonStatus = '';
  
  function determineLessonStatus() {
    if (currentDate < lessonStartTime) {
      lessonStatus = "Upcoming Lesson"
      return "upcoming"
    } else if (currentDate > lessonEndTime) {
      lessonStatus = "Completed"
      return "completed"
    }
  }

  let lessonTime = new Date(lesson.when).toLocaleString();

  return (
    <Link className="lesson-index-item" to={`/lessons/${lesson.id}`}>
      <div id={determineLessonStatus()}></div>
      <li className="individual-lesson">
        <h1>{lessonStatus}</h1>
        <p>{lessonTime}</p>
      </li>
    </Link>
  )
}

export default LessonIndexItem;