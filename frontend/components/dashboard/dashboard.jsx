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
    if (lessonDate < currentDate) {
      numCompletedLessons++
    } else if (lessonEndDate <= currentDate && lessonEndTime < currentTime) {
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
    <div style={{ width: '960px', margin: '0 auto' }}>
      <div className="user-dashboard">
        <div className="acct-info">
          <h3>{`ID: ${session}`}</h3>
          <Link to={`/user/${session}`}>{`${currentUser.firstName} ${currentUser.lastName}`}</Link>
          <p>{`${currentUser.posts.length} Posts 0 Following 0 Followers`}</p>
        </div>
        <div className="study-info">
          <div className="lang-skills">
            <div className="skill-lesson-box">
              <div className="skill">
                <h1>Learning Language</h1>
                <ul className="lang-skills-ul">
                  {studiedLanguages}
                </ul>
              </div>
              <div className="completed-lessons">
                <Link to={`/lessons/${session}`}>
                  <p>{numCompletedLessons}</p>
                  <span>Completed Lessons</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="languages-learning">
            <h1>Upcoming Lesson</h1>
          </div>
          <h1>My Teachers</h1>
          <Link to="/languages">
            Languages
          </Link>
        </div>
      </div>
    </div>
  )
};

export default Dashboard;