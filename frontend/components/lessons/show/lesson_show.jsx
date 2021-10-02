import React, { useEffect } from 'react';

const LessonShow = props => {
  let {
    session,
    lesson,
    messageIcon,
    isLessonCompleted,
    users,
    languages,
    testIcon,
    zoomIcon,
    daysOfWeek,
    months,
    fetchLesson,
    fetchAllUsers,
    fetchLanguages,
  } = props;

  useEffect(() => {
    fetchLesson()
    fetchAllUsers()
    fetchLanguages()
  }, [])

  session = session ? session : '';
  lesson = lesson ? lesson : {};
  messageIcon = messageIcon ? messageIcon : {};
  testIcon = testIcon ? testIcon : {};
  zoomIcon = zoomIcon ? zoomIcon : {};
  isLessonCompleted = isLessonCompleted ? isLessonCompleted : false;
  users = users ? users : [];
  languages = languages ? languages : [];
  daysOfWeek = daysOfWeek ? daysOfWeek : [];
  months = months ? months : [];
  
  let lessonColor = !isLessonCompleted ? "linear-gradient(270deg,#8be0c2,#00bbbf)" : 'linear-gradient(270deg,#b9b9c3,#b9b9c3)';
  
  function status () {
    if (!isLessonCompleted) {
      return <h1 className="lesson-show-status-header">Upcoming</h1>
    } else {
      return <h1 className="lesson-show-status-header">Completed</h1>
    }
  }

  let normalUpcomingDetails = 
    <div>
      <p style={{ marginBottom: '10px', color: '#777', fontSize: '14px' }}>Your lesson is ready to begin at the scheduled time.</p>
      <p style={{ color: '#777', fontSize: '14px' }}>If you need to cancel or reschedule your lesson, make sure to read up on our <p id="policies">cancellation and rescheduling policies</p> first.</p>
    </div>;

  let sameDayDetails = 
    <p style={{ color: '#777', fontSize: '14px' }}>
      {`Your lesson is confirmed for: ${lesson.when}. You are not allowed to cancel a lesosn within 24 hours of the scheduled lesson time.`}
    </p>;

  let completedDetails = 
    <div>
      <p style={{ color: '#777', fontSize: '14px' }}>
        The lesson has been completed. If there was a problem with the lesson, please email ispeakee with details.
      </p>
      <div style={{ boxSizing: 'border-box' }}>
        <button className="book-another-lesson">
          <div>
            <span style={{ textTransform: 'uppercase' }}>Book another lesson</span>
          </div>
        </button>
      </div>
    </div>;
  
  function lessonDescription () {
    if (!isLessonCompleted) {
      return normalUpcomingDetails;
    } else if (isLessonCompleted) {
      return completedDetails;
    }
  }
  
  const recordTime = lesson ? new Date (lesson.created_at).toLocaleTimeString() : {};
  const recordDate = lesson ? new Date (lesson.created_at).toLocaleDateString() : {};

  session = session ? session : '';
  lesson = lesson ? lesson : {};
  users = users ? users : [];
  languages = languages ? languages : [];
  daysOfWeek = daysOfWeek ? daysOfWeek : [];
  
  let lessonDate = new Date(lesson.when).toLocaleDateString();

  let teacher = users.find(user => {
    if (lesson.teacher_id === user.id) return user
  });

  let language = languages.find(language => {
    if (lesson.language_id === language.id) return language
  });

  teacher = teacher ? teacher : {};
  language = language ? language : {};


  let dayOfTheWeek = daysOfWeek[new Date (lessonDate).getDay()];
  let lessonStart = new Date (lesson.when).toLocaleTimeString();
  let lessonEnd = new Date (lesson.end_time).toLocaleTimeString();
  
  lessonStart = lessonStart ? lessonStart : '';
  lessonEnd = lessonEnd ? lessonEnd : '';

  function convertStandardToMilitary (standardTime) {
    const [time, modifier] = standardTime.split(" ");
    let [hours, minutes, seconds] = time.split(":");
    if (hours === "12") {
      hours = "00";
    };

    if (modifier === "PM") {
      hours = parseInt(hours, 10) + 12;
    };

    return `${hours}:${minutes}`;
  };
  
  const lessonDuration = new Date (lesson.end_time) - new Date (lesson.when);
  
  const lineSeparator = <div id="line-separator"></div>
  
  console.log("Lesson Show Props", props)
  return (
    <div className="lesson-show-container">
      <div style={{ padding: '0 30px', display: 'flex', marginBottom: '25px' }}>
        <div className="lesson-show-details info-box box-shadow">
          <div className="lesson-status" style={{ backgroundImage: lessonColor }}>
            <div className="lesson-show-first-line">
              <div className="lesson-date">
                <span>{`${dayOfTheWeek}, ${lessonDate}`}</span>
              </div>
              <div className="lesson-show-id-tag">
                <span style={{ color: '#b9b9c3' }}>{`Lesson ID: ${lesson.id}`}</span>
              </div>
            </div>
            <div className="lesson-show-time">
              <span>{convertStandardToMilitary(lessonStart)}</span>
              <span>{" / "}</span>
              <span>{convertStandardToMilitary(lessonEnd)}</span>
            </div>
          </div>
          <div className="teacher-container lesson-body-padding">
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <p className="teacher-name">{`${teacher.firstName} ${teacher.lastName}`}</p>
                  <span className="teacher-label">Teacher</span>
                </div>
                {messageIcon}
              </div>
              {lineSeparator}
            </div>
          </div>
          <div className="lesson-details lesson-body-padding" style={{ display: 'block' }}>
            <h2>Lesson Title</h2>
            <p>{`0 Lessons Taught`}</p>
            <div style={{ display: 'flex', marginBottom: '12px' }}>
              <div style={{ marginRight: '50px' }}>
                <span className="course-detail">Language</span>
                <p>{`${language.name}`}</p>
              </div>
              <div style={{ marginRight: '12px' }}>
                <span className="course-detail">Duration</span>
                <p>{`${(lessonDuration / 60000).toString()} minutes`}</p>
              </div>
            </div>
            <div style={{ display: 'grid' }}>
              <span className="course-detail">Lesson Category</span>
              <div style={{ display: 'flex' }}>
                <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" fill="#4D4D4D">
                  <path d="M13.282 7.476v9.2c0 .73-.262 1.324-.993 1.324-.275 0-.545-.085-.77-.246l-2.87-2.4H5.661A.663.663 0 015 14.69V9.396a.66.66 0 01.661-.661h2.986l2.872-2.337c.595-.425 1.224-.619 1.648-.023.16.225.115.826.115 1.101z"></path>
                  <g stroke="#4D4D4D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3">
                    <path d="M17 12h2M16.134 9l1.732-1M16.134 15l1.732 1"></path>
                  </g>
                </svg>
                <p id="break-notice">Some teachers may include a 5 minute break in the lesson time</p>
              </div>
              {lineSeparator}
            </div>
          </div>
          <div className="lesson-body-padding lesson-communication">
            <h2>Communication Tool</h2>
            {lineSeparator}
          </div>
          <div className="lesson-body-padding feedback-container">
            <h2>Feedback</h2>
            {lineSeparator}
          </div>
          <div className="lesson-body-padding records-container">
            <h2>Records</h2>
            <ul className="records-ul">
              <li id="lesson-scheduled">
                <p>{`The lesson was scheduled. (Lesson ID: ${lesson.id})`}</p>
                <p className="record-item-time">
                  {`${recordDate} ${convertStandardToMilitary(recordTime)}`}
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="lesson-other-details">
          <div 
            className="lesson-other-top-color-bar" 
            style={{ backgroundImage: lessonColor }}>
          </div>
          <div className="lesson-show-status info-box box-shadow">
            <>{status()}</>
            <>{lessonDescription()}</>
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
            {testIcon}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonShow;