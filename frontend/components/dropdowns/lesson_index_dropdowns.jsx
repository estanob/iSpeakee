import React from 'react'
import { LanguagesDropdown } from './languages_dropdown'
import { TeachersDropdown } from './teachers_dropdown'

export const LessonIndexDropdowns = (props) => {
  let { 
    whichLanguages, 
    whichTeacher,
    user,
    users,
    teachers,
    languages,
    userLanguages,
    userLessons,
    lessonLanguageIds,
  } = props;

  user = user ? user : {};
  users = users ? users : [];
  languages = languages ? languages : [];
  teachers = teachers ? teachers : [];
  userLanguages = userLanguages ? userLanguages : [];
  userLessons = userLessons ? userLessons : [];
  lessonLanguageIds = lessonLanguageIds ? lessonLanguageIds : [];
  
  console.log("Lesson Index Dropdown Props:", props)

  return (
    <div className="info-box box-shadow">
      <h1>Filters</h1>
      <LanguagesDropdown 
        user={user} 
        setLanguage={whichLanguages}
        userLanguages={userLanguages}
        userLessons={userLessons}
        lessonLanguageIds={lessonLanguageIds}
        languages={languages} />
      <TeachersDropdown 
        user={user} 
        allUsers={users} 
        setTeacher={whichTeacher}
        userLessons={userLessons}
        teacherRelations={teachers}
        languages={languages} />
    </div>
  );
};
