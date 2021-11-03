import React from 'react'

export const LanguagesDropdown = (props) => {
  let { user, setLanguage, languages } = props;

  user = user ? user : {};
  languages = languages ? languages : [];
  
  return (
    <div>
      <button onClick={setLanguage('all')}>All my languages</button>
    </div>
  );
};