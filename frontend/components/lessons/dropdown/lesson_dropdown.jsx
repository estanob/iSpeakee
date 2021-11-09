import React from 'react';

export default function LessonDropdown (props) {

  return (
    <div className="lesson-dropdown-container info-box box-shadow">
      <h1>Filters</h1>
      <div className="lesson-filter-buttons">
        <button>All my Languages</button>
        <button>All teachers</button>
      </div>
    </div>
  );
};