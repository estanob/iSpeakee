import React from 'react'

export const LanguagesDropdownList = (props) => {
  let { 
    displayOn, 
    closeDisplay,
    languages,
    userLanguages,
    lessonLanguageIds,
  } = props;
  
  languages = languages ? languages : [];
  userLanguages = userLanguages ? userLanguages : [];
  lessonLanguageIds = lessonLanguageIds ? lessonLanguageIds : [];
  
  let languageButtons = [];
  languages.forEach(language => {
    if (lessonLanguageIds.includes(language.id)) languageButtons.push(language)
  })

  languageButtons = languageButtons.map((lang, i) => {
    return (
      <button className="dropdown-button" key={i}>
        {lang.name}
      </button>
    )
  })
  
  if (!displayOn) return null;
  
  console.log("Languages Dropdown List props:", props)
  console.log("Language Buttons:", languageButtons)
  
  return (
    <ul 
      id="languages-options" 
      className="languages-options-list box-shadow hidden" 
      onMouseLeave={closeDisplay}>
      <button className="dropdown-button">All my languages</button>
      {languageButtons}
    </ul>
  );
};