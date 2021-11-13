import React from 'react'

export const TeachersDropdownList = (props) => {
  let {
    users,
    lessonTeacherIds,
    displayOn,
    closeDisplay,
  } = props;

  users = users ? users : [];
  lessonTeacherIds = lessonTeacherIds ? lessonTeacherIds : [];
  
  let teacherButtons = [];
  users.forEach(teacher => {
    if (lessonTeacherIds.includes(teacher.id)) teacherButtons.push(teacher)
  });

  console.log("Teacher Buttons:", teacherButtons)
  
  teacherButtons = teacherButtons.sort((a, b) => a.firstName < b.firstName ? -1 : 1)
  teacherButtons = teacherButtons.map((teacher, i) => {
    return (
      <button className="dropdown-button" key={i}>
        {`${teacher.firstName} ${teacher.lastName}`}
      </button>
    )
  })
  
  console.log("Teachers Dropdown List Props:", props)
  
  if (!displayOn) return null;
  
  return (
    <ul 
      id="teachers-options"
      className="languages-options-list box-shadow hidden"
      onMouseLeave={closeDisplay}>
      <button className="dropdown-button">All teachers</button>
      {teacherButtons}
    </ul>
  )
}
