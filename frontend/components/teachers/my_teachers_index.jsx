import React from 'react';
import TeacherIndexItem from './teacher_index_item';

const MyTeachersIndex = props => {
  let { teachers, lineSeparator, bookLessonIcon } = props;
  teachers = teachers ? teachers : [];
  lineSeparator = lineSeparator ? lineSeparator : {};
  bookLessonIcon = bookLessonIcon ? bookLessonIcon : {};
  console.log("My Teachers Index Props", props)

  console.log("MyTeachersIndex Teachers", teachers)

  teachers = teachers.map((teacher, i) => {
    return (
      <TeacherIndexItem 
        teacher={teacher} 
        lineSeparator={lineSeparator}
        bookLessonIcon={bookLessonIcon}
        key={i} />
    )
  });

  teachers = teachers.sort(() => Math.random() - 0.5)

  return (
    <ul>
      {teachers.slice(0, 3)}
    </ul>
  )
}

export default MyTeachersIndex;