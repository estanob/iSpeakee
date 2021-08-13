import React, { useEffect } from 'react';

const StudiedLanguage = props => {
  let { language, level } = props;
  language = language ? language : {};
  level = level ? level : '';
  console.log("Studied Language Props")
  console.log(language)
  console.log(level)
  return (
    <li>
      {`${language.name} ${level}`}
    </li>
  )
}

export default StudiedLanguage;