import React from 'react'
import { LanguagesDropdown } from './languages_dropdown'
import { TeachersDropdown } from './teachers_dropdown'

export const LessonIndexDropdowns = (props) => {
  let { 
    whichLanguages, 
    whichTeacher,
  } = props;

  console.log("Lesson Index Dropdown Props:", props)

  return (
    <div className="info-box">
      <h1>Filters</h1>
      <LanguagesDropdown setLanguage={whichLanguages} />
      <TeachersDropdown setTeacher={whichTeacher} />
    </div>
  );
};
