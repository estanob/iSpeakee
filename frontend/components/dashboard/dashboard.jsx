import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import StudiedLanguage from '../languages/studied_languages/studied_language';
import MyTeachersIndex from '../teachers/my_teachers_index';
import TeacherIndexItem from '../teachers/teacher_index_item';
import LessonIndexItem from '../lessons/index_item/lesson_index_item';

const Dashboard = (props) => {
  let { 
    users, 
    languages,
    lessons,
    languageToStudents,
    session,
    currentUser,
    coinIcon,
    presentIcon,
    bookLessonIcon,
    teacherArrow,
    testIcon,
    iTalkiImg,
    levelDescriptions,
    lineSeparator,
    fetchUser,
    fetchAllUsers,
    fetchLanguages,
    fetchLanguageToStudents,
    fetchLessons,
    currentDate,
    currentTime,
  } = props;

  session = session ? session : '';
  currentDate = currentDate ? currentDate : '';
  currentTime = currentTime ? currentTime : '';
  currentUser = currentUser ? currentUser : {};
  coinIcon = coinIcon ? coinIcon : {};
  presentIcon = presentIcon ? presentIcon : {};
  bookLessonIcon = bookLessonIcon ? bookLessonIcon : {};
  testIcon = testIcon ? testIcon : {};
  iTalkiImg = iTalkiImg ? iTalkiImg : {};
  lineSeparator = lineSeparator ? lineSeparator : {};
  teacherArrow = teacherArrow ? teacherArrow : {};
  users = users ? users : [];
  languages = languages ? languages : [];
  languageToStudents = languageToStudents ? languageToStudents : [];
  lessons = lessons ? lessons : [];
  levelDescriptions = levelDescriptions ? levelDescriptions : [];
  let languageIds = [];
  let studiedLanguagesToStudent = [];
  let learningLanguageArr = [];

  useEffect(() => {
    fetchUser()
    fetchAllUsers()
    fetchLanguages()
    fetchLanguageToStudents()
    fetchLessons()
  }, []);

  let numCompletedLessons = 0;
  const timeNow = new Date ();
  let userLessons = currentUser.attendedLessons ? currentUser.attendedLessons : [];

  userLessons.forEach(lesson => {
    const lessonEnd = new Date (lesson.end_time);
    if (lessonEnd < timeNow) {
      numCompletedLessons++
    }
  })
  
  let currentLanguages = currentUser.languagesLearning ? currentUser.languagesLearning : [];

  let userStudiedLanguages =currentUser.studiedLanguages ?currentUser.studiedLanguages : [];
  userStudiedLanguages.forEach(language => {
    languageIds.push(language.language_id)
  });


  currentLanguages.filter(curLang => {
    if (languageIds.includes(curLang.language_id)) {
      studiedLanguagesToStudent.push(curLang)
    }
  })

  studiedLanguagesToStudent.sort((a, b) => (a.level > b.level) ? -1 : 1);

  learningLanguageArr = studiedLanguagesToStudent.map((language, i) => {
    return (
      <StudiedLanguage 
        languages={languages}
        languageToStudent={language}
        levelDescriptions={levelDescriptions}
        key={i} />
    )
  })

  let upcomingLessons = [];
  lessons.forEach(lesson => {
    const lessonTime = new Date(lesson.when);
    const dateNow = new Date ();
    if (lesson.student_id === session && lessonTime > dateNow) {
      upcomingLessons.push(lesson)
    }
  })
  upcomingLessons = upcomingLessons.sort((a, b) => (a.when < b.when) ? - 1 : 1)
  upcomingLessons = upcomingLessons.slice(0, 3)
  
  upcomingLessons = upcomingLessons.map((lesson, i) => {
    return (
      <LessonIndexItem 
        users={users}
        fetchAllUsers={fetchAllUsers}
        currentDate={new Date ()}
        lesson={lesson}
        key={i} />
    )
  })

  upcomingLessons = upcomingLessons ? upcomingLessons : [];
  console.log("Upcoming Lessons", upcomingLessons)
  
  let userTeacherArr = [];
  let teacherRelations = currentUser.teachers ? currentUser.teachers : [];
  teacherRelations.forEach(relation => {
    users.find(user => {
      if (user.id === relation.teacher_id) {
        userTeacherArr.push(user)
      }
    })
  })
  
  let userName = currentUser.display_name ? <p className="display-name">{`${currentUser.display_name}`}</p> : <p className="display-name">{`${currentUser.firstName} ${currentUser.lastName}`}</p>;

  debugger
  return (
    <div style={{ margin: '0 auto' }}>
      <div className="user-dashboard">
        <div className="acct-info">
          <div className="user info-box box-shadow">
            <h3 className="user-id">{`ID: ${session}`}</h3>
            <Link to={`/user/${session}`} className="profile-link">
              {userName}
            </Link>
            <div className="social-media-info">
              <Link to={`/posts/${session}`} className="profile-link">
                {`${currentUser.posts ? currentUser.posts.length : 0} Posts`}
              </Link>
              <p>{`0 Following 0 Followers`}</p>
            </div>
          </div>
          <div className="dashboard-wallet-balance info-box box-shadow">
            <span className="dashboard-ispeakee-balance left-title">
              ispeakee Balance
            </span>
            <>{coinIcon}</>
          </div>
          <div className="refer-a-friend left-title info-box box-shadow">
            <div style={{ display: 'block', width: '100%' }}>
              <span className="left-title">
                Refer a Friend
              </span>
              <p className="left-content">
                Get a friend involved and earn up to $30 ispeakee Credits per referral
              </p>
            </div>
            <>{presentIcon}</>
          </div>
          <div className="language-test left-title info-box box-shadow">
            <div style={{ display: 'block' }}>
              <span>
                ispeakee Language Test
              </span>
              <p className="left-content">
                Test Your Language Level
              </p>
            </div>
            <>{testIcon}</>
          </div>
          <div className="download-ispeakee left-title info-box box-shadow" style={{ padding: '16px 24px 0' }}>
            <div style={{ display: 'block' }}>
              <span>
                Download the ispeakee App
              </span>
              <p className="left-content">
                Learn languages, anytime, anywhere.
              </p>
            </div>
            <>{iTalkiImg}</>
          </div>
        </div>
        <div className="study-info">
          <div className="lang-skills">
            <div className="skill-lesson-box info-box box-shadow">
              <div className="skill">
                <h1 className="learning-language">Learning Language</h1>
                <ul className="lang-skills-ul">
                  {learningLanguageArr}
                </ul>
              </div>
              <div className="completed-lessons">
                <Link to="/lessons/" className="completed-lessons-link">
                  <p className="completed-number">{numCompletedLessons}</p>
                  <span className="completed-text">Completed Lessons</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="languages-learning info-box box-shadow">
            {/* <h1>Upcoming Lesson</h1> */}
            <ul style={{ paddingTop: '10px' }}>
              {upcomingLessons}
            </ul>
          </div>
          <div className="my-teachers info-box box-shadow">
            <div id="my-teachers-container">
              <Link to="/contacts/teacher">
                <button className="my-teachers-title">My Teachers</button>
                {teacherArrow}
              </Link>
            </div>
            <ul className="three-random-teachers">
              <MyTeachersIndex 
                teachers={userTeacherArr} 
                lineSeparator={lineSeparator} 
                bookLessonIcon={bookLessonIcon} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Dashboard;