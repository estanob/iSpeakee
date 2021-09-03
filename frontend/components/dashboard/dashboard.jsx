import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = (props) => {
  console.log("Dashboard Props")
  console.log(props)
  let { 
    users, 
    session, 
    currentUser, 
    fetchUser, 
    fetchAllUsers,
    currentDate,
    currentTime,
  } = props;

  session = session ? session : '';
  currentDate = currentDate ? currentDate : '';
  currentTime = currentTime ? currentTime : '';
  currentUser = currentUser ? currentUser : {};
  users = users ? users : [];

  useEffect(() => {
    fetchUser()
    fetchAllUsers()
  }, []);

  let numCompletedLessons = 0;
  let userLessons = currentUser.attendedLessons ? currentUser.attendedLessons : [];

  userLessons.forEach(lesson => {
    const lessonDate = new Date(lesson.when).toLocaleDateString();
    const lessonTime = new Date(lesson.when).toLocaleTimeString();
    const lessonEndDate = new Date(lesson.end_time).toLocaleDateString();
    const lessonEndTime = new Date(lesson.end_time).toLocaleTimeString();
    if ((lessonDate < currentDate) || (lessonEndDate <= currentDate && lessonEndTime < currentTime)) {
      numCompletedLessons++
    }
  })
  
  let currentLanguages = currentUser.languagesLearning ? currentUser.languagesLearning : {};
  const studiedLanguages = currentLanguages.map((language, i) => {
    return (
      <li key={i} style={{ marginRight: '10px', marginBottom: '10px' }}>
        {`${language.name}`}
      </li>
    )
  });

  return (
    <div style={{ margin: '0 auto' }}>
      <div className="user-dashboard">
        <div className="acct-info">
          <div className="user info-box box-shadow">
            <h3 className="user-id">{`ID: ${session}`}</h3>
            <Link to={`/user/${session}`} className="profile-link">
              {`${currentUser.firstName} ${currentUser.lastName}`}
            </Link>
            <div className="social-media-info">
              <Link to={`/posts/${session}`} className="profile-link">
                {`${currentUser.posts.length} Posts`}
              </Link>
              <p>{`0 Following 0 Followers`}</p>
            </div>
          </div>
          <div className="dashboard-wallet-balance info-box box-shadow">
            <span className="dashboard-ispeakee-balance left-title">
              ispeakee Balance
            </span>
          </div>
          <div className="refer-a-friend left-title info-box box-shadow">
            <span>
              Refer a Friend
            </span>
            <p className="left-content">
              Get a friend involved and earn up to $30 ispeakee Credits per referral
            </p>
          </div>
          <div className="language-test left-title info-box box-shadow">
            <span>
              ispeakee Language Test
            </span>
            <p className="left-content">
              Test Your Language Level
            </p>
          </div>
          <div className="download-ispeakee left-title info-box box-shadow">
            <span>
              Download the ispeakee App
            </span>
            <p className="left-content">
              Learn languages, anytime, anywhere.
            </p>
          </div>
        </div>
        <div className="study-info">
          <div className="lang-skills">
            <div className="skill-lesson-box info-box box-shadow">
              <div className="skill">
                <h1>Learning Language</h1>
                <ul className="lang-skills-ul">
                  {studiedLanguages}
                </ul>
              </div>
              <div className="completed-lessons">
                <Link to="/lessons/" className="completed-lessons-link">
                  <p>{numCompletedLessons}</p>
                  <span>Completed Lessons</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="languages-learning info-box box-shadow">
            <h1>Upcoming Lesson</h1>
          </div>
          <div className="my-teachers info-box box-shadow">
            <h1>My Teachers</h1>
          </div>
          <Link to="/languages" className="languages-link">
            Languages
          </Link>
        </div>
      </div>
    </div>
  )
};

export default Dashboard;