import React from 'react';
import { Link } from 'react-router-dom';

const LessonIndexItem = props => {
  let { lesson, currentDate, currentTime } = props;
  lesson = lesson ? lesson : {};
  currentDate = currentDate ? currentDate : '';
  currentTime = currentTime ? currentTime : '';

  let lessonStartTime = new Date(lesson.when).toLocaleTimeString();
  let lessonEndTime = new Date(lesson.end_time).toLocaleTimeString();
  let lessonStartDate = new Date(lesson.when).toLocaleDateString();
  let lessonEndDate = new Date(lesson.end_time).toLocaleDateString();

  let lessonStatus = '';
  
  function determineLessonStatus() {
    if ((currentDate < lessonStartDate) || (currentDate === lessonStartDate && currentTime < lessonStartTime)) {
      lessonStatus = "Upcoming Lesson"
      return "upcoming"
    } else if ((currentDate > lessonEndDate) || (currentDate === lessonEndDate && currentTime > lessonEndTime)) {
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