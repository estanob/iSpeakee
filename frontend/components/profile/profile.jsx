import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import StudiedLanguage from '../languages/studied_languages/studied_language';
import FeedbackIndexContainer from '../feedback/feedback_index_container';

const Profile = props => {
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

  languageToStudents.forEach(lTS => {
    if (lTS.student_id === currentUser.id) {
      currLangs.forEach(currLang => {
        if (currLang.id === lTS.language_id) {
          currLang.level = lTS.level
        }
      })
    }
  })

  currentLanguages.sort((a, b) => (a.level > b.level) ? -1 : 1);
  studiedLanguagesToStudent.sort((a, b) => (a.level > b.level) ? -1 : 1);

  ownLanguages = currentLanguages.map((language, i) => {
    return (
      <StudiedLanguage 
        languages={languages} 
        languageToStudent={language} 
        levelDescriptions={levelDescriptions} 
        key={i} />
    )
  })
  
  
  let userStudiedLanguages = currentUser.studiedLanguages ? currentUser.studiedLanguages : [];
  userStudiedLanguages.forEach(language => {
    languageIds.push(language.language_id)
  })


  currentLanguages.filter(curLang => {
    if (languageIds.includes(curLang.language_id)) {
      studiedLanguagesToStudent.push(curLang)
    }
  })
  
  learningLanguageArray = studiedLanguagesToStudent.map((language, i) => {
    return (
      <StudiedLanguage 
        languages={languages} 
        languageToStudent={language} 
        levelDescriptions={levelDescriptions} 
        key={i} />
    )
  })

  let selectedTeachers = currentUser ? currentUser.teachers : [];
  selectedTeachers = selectedTeachers.sort(() => Math.random() - 0.5)

  let displayedTeachers = selectedTeachers.slice(0, 4);
  displayedTeachers = displayedTeachers.map((teacher, i) => {
    return (
      <Link key={i} to={`/teacher/${teacher.teacher_id}`} style={{ textDecoration: 'none', color: 'black' }}>
        <div id="teacher-id-link">
          <span style={{ paddingTop: '28px' }}>{teacher.teacher_id}</span>
        </div>
      </Link>
    )
  })

  useEffect(() => {
    fetchUser()
    fetchLanguageToStudents()
    fetchLanguages()
  }, []);
  
  console.log("Profile props", props)
  
  return (
    <div className="profile-container">
      <div className="own-profile">
        <div style={{ display: 'grid' }}>
          <div className="basic-info info-box box-shadow">
            <div className="personal-info">
              <h2>{`${currentUser.firstName} ${currentUser.lastName}`}</h2>
              <div style={{ display: 'flex' }}>
                <Link to={`/posts/${currentUser.id}`}>{`${userPosts.length} Posts`}</Link>
              </div>
              <p>{`${userPosts.length} Posts 0 Following 0 Followers`}</p>
            </div>
            <p>{`User ID: ${currentUser.id}`}</p>
          </div>
          <div className="profile-teachers info-box box-shadow">
            <div id="teachers-links" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>{`Teachers • ${currentUser.teachers.length}`}</p>
              <Link className="see-all-button" to="/contacts/teacher">See all</Link>
            </div>
            <div id="teacher-links-separator"></div>
            <ul style={{ display: 'flex', justifyContent: 'space-between' }}>
              {displayedTeachers}
            </ul>
          </div>
        </div>
        <div>
          <div className="language-info info-box box-shadow">
            <h2>Profile</h2>
            {lineSeparator}
            {miniRedLine}
            <div className="lang-skills" style={{ display: 'flex' }}>
              <h2 className="language-title">Language Skills</h2>
              <ul className="lang-skills-ul">
                {/* {currLangs} */}
                {ownLanguages}
              </ul>
            </div>
            <div className="studied-languages">
              <h2 className="language-title">Learning Language</h2>
              <ul className="lang-skills-ul">
                {learningLanguageArray}
              </ul>
            </div>
          </div>
          <><FeedbackIndexContainer /></>
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