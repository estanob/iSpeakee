import React from 'react'

export const LanguagesDropdown = (props) => {
  let { setLanguage, languages } = props;

  languages = languages ? languages : [];
  
  return (
    <div>
      <button>All my languages</button>
    </div>
  );
};