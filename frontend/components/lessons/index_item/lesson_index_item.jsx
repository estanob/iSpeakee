import React from 'react';

const LessonIndexItem = ({ lesson }) => {
  lesson = lesson ? lesson : {};
  console.log("Lesson Index Item: { Lesson }")
  console.log(lesson)

  let currentTime = new Date().toLocaleString();
  
  function determineLessonStatus(lesson) {
    if (currentTime < lesson.when) {
      return "upcoming"
    } else if (currentTime > lesson.when) {
      return "completed"
    }
  }

  return (
    <li className="individual-lesson" id={determineLessonStatus(lesson)}>
      <p>
        {lesson.when}
      </p>
    </li>
  )
}

export default LessonIndexItem;