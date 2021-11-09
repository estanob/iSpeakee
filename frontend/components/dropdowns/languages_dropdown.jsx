import React, { useState } from 'react'
import { LanguagesDropdownList } from './languages_dropdown_list';

export const LanguagesDropdown = (props) => {
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);
  let { user, setLanguage, languages } = props;

  user = user ? user : {};
  languages = languages ? languages : [];
  
  let isClicked = isDropdownOpened ? 'clicked' : 'unClicked';
  
  function toggleOpen () {
    setIsDropdownOpened(true)
    $('#languages-options').removeClass('hidden')
  }
  
  function toggleClose () {
    setIsDropdownOpened(false)
    $('#languages-options').addClass('hidden')
  }
  
  // function clickedOpen () {
  //   if (isDropdownOpened) {
  //     return (
  //       <LanguagesDropdownList />
  //     )
  //   } else {
  //     return null
  //   }
  // }

  return (
    <div>
      <button className={isClicked} onClick={toggleOpen}>All my languages</button>
      {/* <button className={isClicked} onClick={() => toggleOpen()}>All my languages</button> */}
      {/* <button className={isClicked} onClick={() => $('#languages-options').removeClass('hidden')}>All my languages</button> */}
      {/* <button onClick={() => setLanguage('all')}>All my languages</button> */}
      {/* {clickedOpen()} */}
      <><LanguagesDropdownList displayOn={isDropdownOpened} closeDisplay={toggleClose} /></>
    </div>
  );
};