import React, { useEffect } from 'react';

const StudiedLanguage = props => {
  let { languageToStudent, languages, beginnerLevel } = props;
  languageToStudent = languageToStudent ? languageToStudent : {};
  languages = languages ? languages : [];
  beginnerLevel = beginnerLevel ? beginnerLevel : {};
  
  let targetLanguage = languages.find(language => language.id === languageToStudent.language_id);
  targetLanguage = targetLanguage ? targetLanguage : {};

  let levelIndicator = languageToStudent.level === 1 ? beginnerLevel : '';

  return (
    <li className="studied-language-li" style={{ display: 'flex' }}>
      {`${targetLanguage.name}`}
      {levelIndicator}
      {/* {`${targetLanguage.name} ${languageToStudent.level === 1}`} */}
    </li>
  )
}

export default StudiedLanguage;