import React, { useEffect } from 'react';

export default function TeacherIndex (props) {
  let { users, fetchUsers, fetchTeacherToStudents } = props;
  users = users ? users : [];

  console.log("Teacher Index Props: ", props)
  
  useEffect(() => {
    fetchUsers()
    fetchTeacherToStudents()
  }, [])

  return (
    <div className="teacher-index-container">
      <div className="teacher-filter">
        <button>Favorited</button>
        <button>Current</button>
      </div>
      <div className="teacher-list-container">
        <h1>Hello world</h1>
        <h1>{`Current Teachers • 5`}</h1>
      </div>
    </div>
  );
};