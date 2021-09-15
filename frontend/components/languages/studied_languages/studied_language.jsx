import React, { useEffect } from 'react';

const StudiedLanguage = props => {
  let { languageToStudent, languages, beginnerLevel, beginnerDescription } = props;
  languageToStudent = languageToStudent ? languageToStudent : {};
  languages = languages ? languages : [];
  beginnerLevel = beginnerLevel ? beginnerLevel : {};
  beginnerDescription = beginnerDescription ? beginnerDescription : {};
  
  let targetLanguage = languages.find(language => language.id === languageToStudent.language_id);
  targetLanguage = targetLanguage ? targetLanguage : {};

  let levelIndicator = languageToStudent.level === 1 ? beginnerLevel : '';
  let levelDescription = languageToStudent.level === 1 ? beginnerDescription : '';
  
  return (
    <li className="studied-language-li" style={{ display: 'flex' }}>
      {`${targetLanguage.name}`}
      <div style={{ display: 'block' }}>
        {levelIndicator}
        {levelDescription}
      </div>
      {/* {`${targetLanguage.name} ${languageToStudent.level === 1}`} */}
    </li>
  )
}

export default StudiedLanguage;