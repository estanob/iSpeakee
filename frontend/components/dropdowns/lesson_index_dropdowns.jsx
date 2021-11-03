import React from 'react'
import { LanguagesDropdown } from './languages_dropdown'
import { TeachersDropdown } from './teachers_dropdown'

export const LessonIndexDropdowns = () => {
  return (
    <div className="info-box">
      <h1>Filters</h1>
      <LanguagesDropdown />
      <TeachersDropdown />
    </div>
  );
};
