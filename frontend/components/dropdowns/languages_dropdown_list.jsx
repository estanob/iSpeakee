import React, { useState } from 'react'

export const LanguagesDropdownList = (props) => {
  let { displayOn, closeDisplay } = props;
  
  if (!displayOn) return null;
  
  return (
    <ul 
      id="languages-options" 
      className="languages-options-list box-shadow hidden" 
      onMouseLeave={closeDisplay}>
      <p>Hello</p>
      <p>World</p>
    </ul>
  );
};