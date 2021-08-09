import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Profile = props => {
  console.log("Profile Page Props")
  console.log(props)

  let { currentUser, languageToStudents, fetchLanguageToStudents, fetchUser } = props;
  currentUser = currentUser ? currentUser : {};
  languageToStudents = languageToStudents ? languageToStudents : [];

  const studiedLanguages = currentUser.languagesLearning.map((language, i) => {
    return (
      <li key={i}>
        {`${language.name}`}
      </li>
    )
  });

  useEffect(() => {
    fetchUser()
    fetchLanguageToStudents()
  }, []);
  
  return (
    <div className="profile-container">
      <div className="own-profile">
        <div className="basic-info">
          <h2>{`${currentUser.firstName} ${currentUser.lastName}`}</h2>
          <p>{`0 Posts 0 Following 0 Followers`}</p>
        </div>
        <div className="language-info">
          <h2>Profile</h2>
          <div className="lang-skills">
            <h2>Language Skills</h2>
            <ul>{studiedLanguages}</ul>
          </div>
        </div>
      </div>
      <footer>
        <h2>Language Teachers</h2>
      </footer>
    </div>
  )
}

export default Profile;