import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Profile = props => {
  console.log("Profile Page Props")
  console.log(props)

  let { 
    currentUser, 
    languageToStudents, 
    fetchLanguageToStudents, 
    fetchUser, 
  } = props;

  currentUser = currentUser ? currentUser : {};
  languageToStudents = languageToStudents ? languageToStudents : [];
  let userPosts = currentUser.posts ? currentUser.posts : [];

  userPosts = userPosts.map((post, i) => {
    return (
      <li key={i}>
        {`${post.body}`}
        <br/>
        <Link to={`/post/${post.id}`} className="post-creation">{`${post.created_at}`}</Link>
      </li>
    )
  });

  let currentLanguages = currentUser.languagesLearning ? currentUser.languagesLearning : {};
  const studiedLanguages = currentLanguages.map((language, i) => {
    return (
      <li key={i} style={{ marginRight: '10px', marginBottom: '10px' }}>
        {`${language.name}`}
      </li>
    )
  });

  useEffect(() => {
    fetchUser()
    fetchLanguageToStudents()
  }, []);
  
  return (
    <div className="profile-container" style={{ backgroundColor: '#fafafc' }}>
      <div className="own-profile">
        <div className="basic-info">
          <div className="personal-info">
            <h2>{`${currentUser.firstName} ${currentUser.lastName}`}</h2>
            <p>{`${userPosts.length} Posts 0 Following 0 Followers`}</p>
          </div>
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
              {studiedLanguages}
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