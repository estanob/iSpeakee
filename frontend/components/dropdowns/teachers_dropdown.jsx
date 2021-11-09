import React, { useState } from 'react'
import { TeachersDropdownList } from './teachers_dropdown_list';

export const TeachersDropdown = (props) => {
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);
  let { 
    user, 
    allUsers,
    teacherRelations,
    setTeacher, 
    userTeachers,
    lessonTeacherIds,
   } = props;

  user = user ? user : {};
  allUsers = allUsers ? allUsers : [];
  teacherRelations = teacherRelations ? teacherRelations : [];
  userTeachers = userTeachers ? userTeachers : [];
  lessonTeacherIds = lessonTeacherIds ? lessonTeacherIds : [];

  let isClicked = isDropdownOpened ? 'filter-button clicked' : 'filter-button unClicked';
  
  function toggleOpen () {
    setIsDropdownOpened(true)
    $('#teachers-options').removeClass('hidden')
  }
  
  function toggleClose () {
    setIsDropdownOpened(false)
    $('#teachers-options').addClass('hidden')
  }

  console.log("Teachers Dropdown Props:", props)
  
  return (
    <div>
      <button className={isClicked} onClick={toggleOpen}>All teachers</button>
      <>
        <TeachersDropdownList 
          users={allUsers}
          lessonTeacherIds={lessonTeacherIds}
          displayOn={isDropdownOpened}
          closeDisplay={toggleClose} />
      </>
    </div>
  );
};