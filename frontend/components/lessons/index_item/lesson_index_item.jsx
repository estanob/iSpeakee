import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const LessonIndexItem = props => {
  let { users, lesson, currentDate, fetchAllUsers } = props;
  users = users ? users : [];
  lesson = lesson ? lesson : {};
  currentDate = currentDate ? currentDate : '';

  useEffect(() => {
    fetchAllUsers()
  }, [])
  
  const theMonths = [
    "Jan", "Feb", "Mar", "Apr", 
    "May", "Jun", "Jul", "Aug", 
    "Sep", "Oct", "Nov", "Dec"
  ];

  let lessonStartTime = new Date (lesson.when);
  let lessonEndTime = new Date (lesson.end_time);
  let lessonDuration = (lessonEndTime - lessonStartTime) / 60000;
  let language = lesson ? lesson.language : {};

  let lessonStatus = '';
  let teacher = users.find(user => {
    if (lesson.teacher_id === user.id) return user
  });

  let lessonMonth = theMonths[lessonStartTime.getMonth()];
  let lessonDate = lessonStartTime.getDate();

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

  function convertStandardToMilitary (standardTime) {
    const [time, modifier] = standardTime.split(" ");
    let [hours, minutes, seconds] = time.split(":");
    if (hours === "12") {
      hours = "00";
    };

    if (modifier === "PM") {
      hours = parseInt(hours, 10) + 12;
    };

    return `${hours}:${minutes}`;
  };

  console.log("Lesson Index Item Props:", props)
  
  return (
    <Link className="lesson-index-item" to={`/lessons/${lesson.id}`}>
      <div className="lesson-index-li-status" id={determineLessonStatus()}></div>
      <li className="individual-lesson">
        <h1>{lessonStatus}</h1>
        <div style={{ display: 'flex' }}>
          <div style={{ display: 'flex', flex: '1 1', paddingRight: '12px' }}>
            <div className="lesson-date-no-year">
              <h2>{lessonDate}</h2>
              <p>{lessonMonth}</p>
            </div>
            <div className="lesson-li-divider"></div>
            <div style={{ display: 'grid' }}>
              <p className="less-idx-itm-time-info">
                {convertStandardToMilitary(new Date(lesson.when).toLocaleTimeString())}
              </p>
              <p className="language-duration">
                {`${language.name} - ${lessonDuration} min`}
              </p>
            </div>
          </div>
          <p className="less-idx-itm-teacher-name">{`@${teacher.username}`}</p>
        </div>
      </li>
    </Link>
  )
}

export default LessonIndexItem;