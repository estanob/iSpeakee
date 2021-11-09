import React from 'react'

export const TeachersDropdown = (props) => {
  let { user, setTeacher, userTeachers } = props;

  user = user ? user : {};
  userTeachers = userTeachers ? userTeachers : [];
  
  return (
    <div>
      <button onClick={() => setTeacher('all')}>All teachers</button>
      <ul>

      </ul>
    </div>
  );
};