import React from 'react';
import { Link } from 'react-router-dom';

const TeacherIndexItem = props => {
  let { teacher, lineSeparator, bookLessonIcon } = props;

  teacher = teacher ? teacher : {};
  lineSeparator = lineSeparator ? lineSeparator : {};
  bookLessonIcon = bookLessonIcon ? bookLessonIcon : {};
  console.log("Teacher Index Item Props", props)

  let teacherName = teacher.display_name ? <p className="teacher-li-name">{`${teacher.display_name}`}</p> : <p className="teacher-li-name">{`${teacher.firstName} ${teacher.lastName}`}</p>;
  
  return (
    <li className="teacher-index-li">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to={`/teacher/${teacher.id}`} style={{ border: 'none', background: 'none', textDecoration: 'none' }}>
          {teacherName}
        </Link>
        <div className="book-lesson-icon">{bookLessonIcon}</div>
      </div>
      {lineSeparator}
    </li>
  )
}

export default TeacherIndexItem;