import React, { useState } from 'react'
import { LanguagesDropdownList } from './languages_dropdown_list';

export const LanguagesDropdown = (props) => {
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);
  let { 
    user, 
    setLanguage, 
    languages, 
    userLanguages, 
    lessonLanguageIds, 
  } = props;

  user = user ? user : {};
  languages = languages ? languages : [];
  userLanguages = userLanguages ? userLanguages : [];
  lessonLanguageIds = lessonLanguageIds ? lessonLanguageIds : [];
  
  let isClicked = isDropdownOpened ? 'clicked' : 'unClicked';
  
  function toggleOpen () {
    setIsDropdownOpened(true)
    $('#languages-options').removeClass('hidden')
  }
  
  function toggleClose () {
    setIsDropdownOpened(false)
    $('#languages-options').addClass('hidden')
  }
  
  return (
    <div>
      <button className={isClicked} onClick={toggleOpen}>All my languages</button>
      <>
        <LanguagesDropdownList 
          languages={languages}
          userLanguages={userLanguages}
          lessonLanguageIds={lessonLanguageIds}
          displayOn={isDropdownOpened} 
          closeDisplay={toggleClose} />
      </>
    </div>
  );
};