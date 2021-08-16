import React, { useEffect } from 'react';

const StudiedLanguage = props => {
  let { language } = props;
  language = language ? language : {};

  return (
    <li className="studied-language-li">
      {`${language.name} ${language.level}`}
    </li>
  )
}

export default StudiedLanguage;