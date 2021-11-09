import React from 'react'

export const LanguagesDropdown = (props) => {
  let { user, setLanguage, languages } = props;

  user = user ? user : {};
  languages = languages ? languages : [];
  
  const optionsList = 
    <div id="languages-options">
    {/* <div className="hidden" id="languages-options"> */}
      <div className="languages-options-dropdown">
        <ul>
          <li><p>Hello</p></li>
          <li><p>World</p></li>
        </ul>
      </div>
    </div>;
  
  return (
    <div>
      <button onClick={() => $('#languages-options').removeClass('hidden')}>All my languages</button>
      {/* <button onClick={() => setLanguage('all')}>All my languages</button> */}
      {optionsList}
    </div>
  );
};