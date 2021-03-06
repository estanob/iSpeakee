import React, { useState } from 'react'
import { LanguagesDropdownList } from './languages_dropdown_list';

export const LanguagesDropdown = (props) => {
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);
  let [languageFilterDisplay, setLanguageFilterDisplay] = useState('All my languages');
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
  
  let isClicked = isDropdownOpened ? 'filter-button clicked' : 'filter-button unClicked';
  
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
      <button className={isClicked} onClick={toggleOpen}>{languageFilterDisplay}</button>
      <>
        <LanguagesDropdownList 
          languages={languages}
          userLanguages={userLanguages}
          lessonLanguageIds={lessonLanguageIds}
          displayOn={isDropdownOpened} 
          setDisplay={setLanguageFilterDisplay}
          closeDisplay={toggleClose} />
      </>
    </div>
  );
};