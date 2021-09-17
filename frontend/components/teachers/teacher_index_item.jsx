import React from 'react';

const TeacherIndexItem = props => {
  let { teacher, bookLessonIcon } = props;
  teacher = teacher ? teacher : {};
  bookLessonIcon = bookLessonIcon ? bookLessonIcon : {};
  console.log("Teacher Index Item Props", props)

  let teacherName = teacher.display_name ? <p className="teacher-li-name">{`${teacher.display_name}`}</p> : <p className="teacher-li-name">{`${teacher.firstName} ${teacher.lastName}`}</p>;
  
  return (
    <li className="teacher-index-li">
      {teacherName}
      <>{bookLessonIcon}</>
    </li>
  )
}

export default TeacherIndexItem;