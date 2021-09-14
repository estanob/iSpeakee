import React, { useEffect } from 'react';

const StudiedLanguage = props => {
  let { languageToStudent, languages } = props;
  languageToStudent = languageToStudent ? languageToStudent : {};
  languages = languages ? languages : [];
  
  let targetLanguage = languages.find(language => language.id === languageToStudent.language_id);
  targetLanguage = targetLanguage ? targetLanguage : {};

  console.log("Studied Language Props", props)
  return (
    <li className="studied-language-li">
      {`${targetLanguage.name} ${languageToStudent.level}`}
    </li>
  )
}

export default StudiedLanguage;