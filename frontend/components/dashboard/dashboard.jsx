import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = (props) => {
  console.log("Dashboard Props")
  console.log(props)
  let { 
    users, 
    logout, 
    session, 
    currentUser, 
    fetchUser, 
    fetchAllUsers 
  } = props;

  session = session ? session : '';
  currentUser = currentUser ? currentUser : {};
  users = users ? users : [];

  useEffect(() => {
    fetchUser()
    fetchAllUsers()
  }, []);

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
              <p>{`0 Completed Lessons`}</p>
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