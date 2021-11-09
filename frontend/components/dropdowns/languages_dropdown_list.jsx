import React, { useState } from 'react'

export const LanguagesDropdownList = (props) => {
  function closeList () {
    $('#languages-options').addClass('hidden')
  }
  
  return (
    <ul 
      id="languages-options" 
      className="languages-options-list box-shadow hidden" 
      onMouseLeave={closeList}>
      <li><p>Hello</p></li>
      <li><p>World</p></li>
    </ul>
  );
};