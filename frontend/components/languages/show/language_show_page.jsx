import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const LanguageShow = props => {
  console.log("Language Show Props")
  console.log(props)

  let { language, users, fetchLanguage, fetchAllUsers } = props;
  language = language ? language : {};
  users = users ? users : [];
  
  useEffect(() => {
    fetchAllUsers()
    fetchLanguage()
  }, []);
  
  return (
    <div>
      <Link to="/languages" style={{ textDecoration: 'none', color: 'black' }}>
        Back to other languages
      </Link>
      <h1 style={{ fontWeight: 'heavy' }}>{`${language.name}`}</h1>
      <h1>Welcome to this language!</h1>
      <p>{`Are you ready to learn ${language.name}? Find a teacher and book a lesson now!`}</p>
    </div>
  )
};

export default LanguageShow;