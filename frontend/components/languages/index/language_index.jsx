import React, { useEffect } from 'react';

const LanguageIndex = props => {
  console.log("Language index props:");
  console.log(props);

  let { languages, fetchLanguages } = props;
  
  languages = languages ? languages : [languages];

  useEffect(() => {
    fetchLanguages()
  }, [])

  const languageList = languages.map((language, i) => {
    return (
      <li key={i}>
        {language.name}
      </li>
    )
  });

  return (
    <div className="language-index">
      <h1>Hello</h1>
      <h3>Our languages available for study</h3>
      <ul className="languages-ul">
        {languageList}
      </ul>
    </div>
  )
}

export default LanguageIndex;