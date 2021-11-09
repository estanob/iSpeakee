import React from 'react'

export const TeachersDropdownList = (props) => {
  let {
    displayOn,
    closeDisplay,
  } = props;
  
  console.log("Teachers Dropdown List Props:", props)
  
  // if (!displayOn) return null;
  
  return (
    <ul 
      id="teachers-options"
      className="languages-options-list box-shadow hidden"
      onMouseLeave={closeDisplay}>
      <button className="dropdown-button">All teachers</button>
    </ul>
  )
}
