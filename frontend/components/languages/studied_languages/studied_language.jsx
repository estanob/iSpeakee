import React, { useState } from 'react';

const StudiedLanguage = props => {
  let { languageToStudent, languages, beginnerLevel, beginnerDescription, hovered } = props;
  let [hoverStatus, setHoverStatus] = useState(false);

  languageToStudent = languageToStudent ? languageToStudent : {};
  languages = languages ? languages : [];
  beginnerLevel = beginnerLevel ? beginnerLevel : {};
  beginnerDescription = beginnerDescription ? beginnerDescription : {};
  
  let targetLanguage = languages.find(language => language.id === languageToStudent.language_id);
  targetLanguage = targetLanguage ? targetLanguage : {};

  let levelIndicator = languageToStudent.level === 1 ? beginnerLevel : '';
  let levelDescription = languageToStudent.level === 1 ? beginnerDescription : '';
  
  let beginnerExplanation = hoverStatus ? 'beginner-description' : 'beginner-description hidden';
  
  return (
    <li className="studied-language-li" style={{ display: 'flex' }}>
      {`${targetLanguage.name}`}
      <div style={{ display: 'block' }}>
        <span className="language-level-indicator-box" gap="5">
          <span className="language-level-container" placement="bottom">
            <span className="language-level-reference" onMouseEnter={() => setHoverStatus(true)} onMouseLeave={() => setHoverStatus(false)}>
              <div style={{ boxSizing: 'border-box' }}>
                <span className="level grey-level-color"></span>
                <span className="level grey-level-color"></span>
                <span className="level grey-level-color"></span>
                <span className="level grey-level-color"></span>
                <span className="level grey-level-color"></span>
              </div>
            </span>
          </span>
        </span>
        <span className={beginnerExplanation}>
          A1: Beginner
        </span>


        {/* {levelIndicator}
        {levelDescription} */}
      </div>
      {/* {`${targetLanguage.name} ${languageToStudent.level === 1}`} */}
    </li>
  )
}

export default StudiedLanguage;