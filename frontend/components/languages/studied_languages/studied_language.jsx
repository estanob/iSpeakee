import React, { useState } from 'react';

const StudiedLanguage = props => {
  let { languageToStudent, languages, levelDescriptions } = props;
  let [hoverStatus, setHoverStatus] = useState(false);

  languageToStudent = languageToStudent ? languageToStudent : {};
  languages = languages ? languages : [];
  levelDescriptions = levelDescriptions ? levelDescriptions : [];
  
  let targetLanguage = languages.find(language => language.id === languageToStudent.language_id);
  targetLanguage = targetLanguage ? targetLanguage : {};
  const levelIndex = languageToStudent.level - 1;

  let beginnerExplanation = hoverStatus ? 'beginner-description' : 'beginner-description hidden';
  
  const firstBar = () => {
    if (levelIndex === 0) {
      return "grey-level-color"
    } else if (levelIndex > 0 && levelIndex < 6) {
      return "light-red-level-color"
    } else {
      return "red-level-color"
    }
  }

  const secondBar = () => {
    if (levelIndex <= 1) {
      return "grey-level-color"
    } else if (levelIndex > 1 && levelIndex < 6) {
      return "light-red-level-color"
    } else {
      return "red-level-color"
    }
  }

  const thirdBar = () => {
    if (levelIndex <= 2) {
      return "grey-level-color"
    } else if (levelIndex > 2 && levelIndex < 6) {
      return "light-red-level-color"
    } else {
      return "red-level-color"
    }
  }

  const fourthBar = () => {
    if (levelIndex <= 3) {
      return "grey-level-color"
    } else if (levelIndex > 3 && levelIndex < 6) {
      return "light-red-level-color"
    } else {
      return "red-level-color"
    }
  }

  const fifthBar = () => {
    if (levelIndex <= 4) {
      return "grey-level-color"
    } else if (levelIndex > 4 && levelIndex < 6) {
      return "light-red-level-color"
    } else {
      return "red-level-color"
    }
  }
  
  return (
    <li className="studied-language-li" style={{ display: 'flex' }}>
      {`${targetLanguage.name}`}
      <div style={{ display: 'block' }}>
        <span className="language-level-indicator-box" gap="5">
          <span className="language-level-container" placement="bottom">
            <span className="language-level-reference" onMouseEnter={() => setHoverStatus(true)} onMouseLeave={() => setHoverStatus(false)}>
              <div style={{ boxSizing: 'border-box' }}>
                <span className={`level ${firstBar()}`}></span>
                <span className={`level ${secondBar()}`}></span>
                <span className={`level ${thirdBar()}`}></span>
                <span className={`level ${fourthBar()}`}></span>
                <span className={`level ${fifthBar()}`}></span>
              </div>
            </span>
          </span>
        </span>
        <span className={beginnerExplanation}>
          {levelDescriptions[levelIndex]}
        </span>


        {/* {levelIndicator}
        {levelDescription} */}
      </div>
      {/* {`${targetLanguage.name} ${languageToStudent.level === 1}`} */}
    </li>
  )
}

export default StudiedLanguage;