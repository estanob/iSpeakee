import React from 'react';

const LessonIndexItem = ({ lesson }) => {
  lesson = lesson ? lesson : {};
  return (
    <div className="individual-lesson">
      <p>
        {lesson.when}
      </p>
    </div>
  )
}

export default LessonIndexItem;