import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import StudiedLanguage from '../languages/studied_languages/studied_language';

const Profile = props => {
  console.log("Profile Page Props")
  console.log(props)

  let { 
    currentUser, 
    lineSeparator,
    miniRedLine,
    levelDescriptions,
    languageToStudents, 
    fetchLanguageToStudents, 
    fetchUser, 
    languages,
    fetchLanguages,
  } = props;

  currentUser = currentUser ? currentUser : {};
  languageToStudents = languageToStudents ? languageToStudents : [];
  languages = languages ? languages : [];
  lineSeparator = lineSeparator ? lineSeparator : {};
  miniRedLine = miniRedLine ? miniRedLine : {};
  levelDescriptions = levelDescriptions ? levelDescriptions : [];
  let userPosts = currentUser.posts ? currentUser.posts : [];

  userPosts = userPosts.map((post, i) => {
    return (
      <li key={i}>
        {`${post.body}`}
        <br/>
        <Link to={`/post/${post.id}`} className="post-creation">
          {`${new Date (post.created_at).toLocaleString()}`}
        </Link>
      </li>
    )
  });

  let currentLanguages = currentUser.languagesLearning ? currentUser.languagesLearning : [];
  console.log("Current Languages before map", currentLanguages)
  let ownLanguages = [];
  let studiedLanguagesToStudent = [];
  let languageIds = [];
  let currLangs = [];
  let learningLanguageArray = [];
  currentLanguages.forEach(language => {
    currLangs.push({ id: language.id, level: language.level, name: '' })
  })

  languages.forEach(language => {
    currLangs.forEach(curLang => {
      if (language.id === curLang.id) curLang.name = language.name
    })
  })

  console.log("Curr Langs after adding language name", currLangs)

  languageToStudents.forEach(lTS => {
    if (lTS.student_id === currentUser.id) {
      currLangs.forEach(currLang => {
        if (currLang.id === lTS.language_id) {
          currLang.level = lTS.level
        }
      })
    }
  })

  ownLanguages = currentLanguages.map((language, i) => {
    return (
      <StudiedLanguage languages={languages} languageToStudent={language} levelDescriptions={levelDescriptions} key={i} />
    )
  })
  
  console.log("Own Languages", ownLanguages)
  
  let userStudiedLanguages = currentUser.studiedLanguages ? currentUser.studiedLanguages : [];
  userStudiedLanguages.forEach(language => {
    languageIds.push(language.language_id)
  })
  console.log("User Studied Langauges", userStudiedLanguages)

  console.log("currLangs", currLangs)

  currentLanguages.filter(curLang => {
    if (languageIds.includes(curLang.language_id)) {
      studiedLanguagesToStudent.push(curLang)
    }
  })
  
  learningLanguageArray = studiedLanguagesToStudent.map((language, i) => {
    return (
      <StudiedLanguage languages={languages} languageToStudent={language} levelDescriptions={levelDescriptions} key={i} />
    )
  })

  console.log("Studied Languages To Student", studiedLanguagesToStudent)

  console.log("Language IDs", languageIds)

  console.log("Current Languages", currentLanguages)

  useEffect(() => {
    fetchUser()
    fetchLanguageToStudents()
    fetchLanguages()
  }, []);
  
  return (
    <div className="profile-container">
      <div className="own-profile">
        <div className="basic-info info-box box-shadow">
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
        <div>
          <div className="language-info info-box box-shadow">
            <h2>Profile</h2>
            {lineSeparator}
            {miniRedLine}
            <div className="lang-skills" style={{ display: 'flex' }}>
              <h2>Language Skills</h2>
              <ul className="lang-skills-ul">
                {/* {currLangs} */}
                {ownLanguages}
              </ul>
            </div>
            <div className="studied-languages">
              <h2>Learning Language</h2>
              <ul className="lang-skills-ul">
                {learningLanguageArray}
              </ul>
            </div>
          </div>
          <div className="posts info-box box-shadow">
            <h2>Activities</h2>
            <ul className="posts-ul">
              {userPosts}
            </ul>
          </div>
        </div>
      </div>
      <footer>
        <h2>Language Teachers</h2>
        <p>© iSpeakee - 2021</p>
      </footer>
    </div>
  )
}

export default Profile;