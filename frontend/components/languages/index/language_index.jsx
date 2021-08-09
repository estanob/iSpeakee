import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const LanguageIndex = props => {
  console.log("Language index props:");
  console.log(props);

  let { languages, fetchLanguages } = props;
  
  languages = languages ? languages : [];

  useEffect(() => {
    fetchLanguages()
  }, [])

  const languageList = languages.map((language, i) => {
    return (
      <li key={i}>
        <Link to={`/languages/${language.id}`} style={{ textDecoration: 'none', color: 'black' }}>
          {language.name}
        </Link>
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