import React from 'react';
import { Link } from 'react-router-dom';

const LessonIndexItem = props => {
  let { users, lesson, currentDate } = props;
  users = users ? users : [];
  lesson = lesson ? lesson : {};
  currentDate = currentDate ? currentDate : '';

  let lessonStartTime = new Date (lesson.when);
  let lessonEndTime = new Date (lesson.end_time);

  let lessonStatus = '';
  let teacher = users.find(user => {
    if (lesson.teacher_id === user.id) return user
  });

  teacher = teacher ? teacher : {};
  
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

  console.log("Lesson Index Item Props", props)
  return (
    <Link className="lesson-index-item" to={`/lessons/${lesson.id}`}>
      <div id={determineLessonStatus()}></div>
      <li className="individual-lesson">
        <h1>{lessonStatus}</h1>
        <div style={{ display: 'flex' }}>
          <p className="less-idx-itm-time-info">{lessonTime}</p>
          <p className="less-idx-itm-teacher-name">{`@${teacher.username}`}</p>
        </div>
      </li>
    </Link>
  )
}

export default LessonIndexItem;