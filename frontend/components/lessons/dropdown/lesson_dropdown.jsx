import React from 'react';

export default function LessonDropdown (props) {

  console.log("Lesson Dropdown Props", props)

  return (
    <div className="info-box box-shadow">
      <h1>Filters</h1>
      <div className="lesson-filter-buttons">
        <button>All my Languages</button>
        <button>All teachers</button>
      </div>
    </div>
  );
};