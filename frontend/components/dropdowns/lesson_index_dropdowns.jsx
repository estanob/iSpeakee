import React from 'react'
import { LanguagesDropdown } from './languages_dropdown'
import { TeachersDropdown } from './teachers_dropdown'

export const LessonIndexDropdowns = (props) => {
  let { 
    whichLanguages, 
    whichTeacher,
    user,
    languages,
  } = props;

  user = user ? user : {};
  languages = languages ? languages : [];
  
  console.log("Lesson Index Dropdown Props:", props)

  return (
    <div className="info-box">
      <h1>Filters</h1>
      <LanguagesDropdown 
        user={user} 
        setLanguage={whichLanguages} />
      <TeachersDropdown 
        user={user} 
        setTeacher={whichTeacher} />
    </div>
  );
};
