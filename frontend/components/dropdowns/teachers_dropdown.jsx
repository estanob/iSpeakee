import React from 'react'

export const TeachersDropdown = (props) => {
  let { setTeacher, userTeachers } = props;

  userTeachers = userTeachers ? userTeachers : [];
  
  return (
    <div>
      <button onClick={setTeacher('all')}>All teachers</button>
      <ul>

      </ul>
    </div>
  );
};