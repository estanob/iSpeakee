import React, { useEffect } from 'react';
import TeacherIndexPageItem from './teacher_index_page_item';

export default function TeacherIndex (props) {
  let { 
    session,
    users,
    teacherToStudents,
    teacherProfiles,
    bookLessonIcon,
    horizontalThreeDots,
    verticalThreeDots,
    miniRedLine,
    fetchUsers,
    fetchTeacherToStudents,
    fetchTeacherProfiles,
  } = props;

  useEffect(() => {
    fetchUsers()
    fetchTeacherToStudents()
    fetchTeacherProfiles()
  }, [])

  let myTeachers = [];
  let teacherIds = [];

  session = session ? session : '';
  users = users ? users : [];
  teacherToStudents = teacherToStudents ? teacherToStudents : [];
  teacherProfiles = teacherProfiles ? teacherProfiles : [];
  bookLessonIcon = bookLessonIcon ? bookLessonIcon : {};
  horizontalThreeDots = horizontalThreeDots ? horizontalThreeDots : {};
  verticalThreeDots = verticalThreeDots ? verticalThreeDots : {};
  miniRedLine = miniRedLine ? miniRedLine : {};

  let myTeacherToStudents = teacherToStudents.filter(relation => relation.student_id === session);
  myTeacherToStudents = myTeacherToStudents ? myTeacherToStudents : [];

  myTeacherToStudents.forEach(relation => {
    teacherIds.push(relation.teacher_id)
  })

  console.log("Teacher Index Props: ", props)
  console.log("Teacher IDs: ", teacherIds, "My Teachers To Student: ", myTeacherToStudents)

  users.forEach(teacher => {
    if (teacherIds.includes(teacher.id)) myTeachers.push(teacher)
  })
  
  console.log("My Teachers Arr", myTeachers)
  
  myTeachers = myTeachers.map((teacher, i) => {
    return (
      <TeacherIndexPageItem 
        teacher={teacher} 
        bookLesson={bookLessonIcon} 
        horizontalDots={horizontalThreeDots}
        verticalDots={verticalThreeDots}
        redLine={miniRedLine}
        key={i} />
    )
  })

  myTeachers = myTeachers.sort(() => Math.random() - 0.5)
  
  return (
    <div className="teacher-index-container">
      <div className="teacher-filter">
        <div className="teacher-filter-buttons">
          <button>Favorited</button>
          <button>Current</button>
        </div>
        <div className="teacher-search">
          <button>Dropdown</button>
          <button>Search</button>
        </div>
      </div>
      <div className="teacher-list-container">
        <h1>{`Current Teachers • ${myTeacherToStudents.length}`}</h1>
        <ul>
          {myTeachers}
        </ul>
      </div>
    </div>
  );
};