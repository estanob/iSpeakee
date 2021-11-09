import React, { useState } from 'react'
import { LanguagesDropdownList } from './languages_dropdown_list';

export const LanguagesDropdown = (props) => {
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);
  let { user, setLanguage, languages } = props;

  user = user ? user : {};
  languages = languages ? languages : [];
  
  let isClicked = isDropdownOpened ? 'clicked' : 'unClicked';
  
  function toggleOpen () {
    $('#languages-options').removeClass('hidden')
    setIsDropdownOpened(true)
  }
  
  function clickedOpen () {
    if (isDropdownOpened) {
      return (
        <LanguagesDropdownList />
      )
    }
  }

  return (
    <div>
      <button className={isClicked} onClick={toggleOpen}>All my languages</button>
      {/* <button className={isClicked} onClick={() => $('#languages-options').removeClass('hidden')}>All my languages</button> */}
      {/* <button onClick={() => setLanguage('all')}>All my languages</button> */}
      {clickedOpen()}
    </div>
  );
};