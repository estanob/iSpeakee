import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import StudiedLanguage from '../languages/studied_languages/studied_language';

const Profile = props => {
  console.log("Profile Page Props")
  console.log(props)

  let { 
    currentUser, 
    languageToStudents, 
    fetchLanguageToStudents, 
    fetchUser, 
    languages,
    fetchLanguages,
  } = props;

  currentUser = currentUser ? currentUser : {};
  languageToStudents = languageToStudents ? languageToStudents : [];
  languages = languages ? languages : [];
  let userPosts = currentUser.posts ? currentUser.posts : [];

  userPosts = userPosts.map((post, i) => {
    return (
      <li key={i}>
        {`${post.body}`}
        <br/>
        <Link to={`/post/${post.id}`} className="post-creation">
          {`${post.created_at}`}
        </Link>
      </li>
    )
  });

  let currentLanguages = currentUser.languagesLearning ? currentUser.languagesLearning : [];
  let ownStudiedLanguages = [];
  let currLangs = [];
  currentLanguages.forEach(language => {
    currLangs.push({ id: language.id, level: language.level, name: '' })
  })

  languageToStudents.forEach(lTS => {
    if (lTS.student_id === currentUser.id) {
      currLangs.forEach(currLang => {
        if (currLang.id === lTS.language_id) {
          currLang.level = lTS.level
        }
      })
    }
  })

  languages.forEach(language => {
    currLangs.forEach(currLang => {
      if (currLang.id === language.id) {
        currLang.name = language.name
      }
    })
  })
    
  ownStudiedLanguages = currLangs.map((language, i) => {
    return (
      <StudiedLanguage language ={language} key={i} />
    )
  })

  useEffect(() => {
    fetchUser()
    fetchLanguageToStudents()
    fetchLanguages()
  }, []);
  
  return (
    <div className="profile-container" style={{ backgroundColor: '#fafafc' }}>
      <div className="own-profile">
        <div className="basic-info">
          <div className="personal-info">
            <h2>{`${currentUser.firstName} ${currentUser.lastName}`}</h2>
            <p>{`${userPosts.length} Posts 0 Following 0 Followers`}</p>
          </div>
          <p>{`User ID: ${currentUser.id}`}</p>
          <div className="profile-teachers">
            <p>Teachers</p>
            <button>See all</button>
          </div>
        </div>
        <div className="language-info">
          <h2>Profile</h2>
          <div className="lang-skills" style={{ display: 'flex' }}>
            <h2>Language Skills</h2>
            <ul className="lang-skills-ul">
              {/* {currLangs} */}
              {ownStudiedLanguages}
            </ul>
          </div>
          <div className="posts">
            <h2>Activity</h2>
            <ul className="posts-ul">
              {userPosts}
            </ul>
          </div>
        </div>
      </div>
      <footer>
        <h2>Language Teachers</h2>
        <p>© iSpeaki - 2021</p>
      </footer>
    </div>
  )
}

export default Profile;