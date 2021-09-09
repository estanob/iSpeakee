import React, { useEffect } from 'react';

const LessonShow = props => {
  let {
    session,
    lesson,
    isLessonCompleted,
    users,
    languages,
    daysOfWeek,
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
  isLessonCompleted = isLessonCompleted ? isLessonCompleted : false;
  users = users ? users : [];
  languages = languages ? languages : [];
  daysOfWeek = daysOfWeek ? daysOfWeek : [];
  
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
    <p style={{ color: '#777', fontSize: '14px' }}>
      The lesson has been completed. If there was a problem with the lesson, please email ispeakee with details.
    </p>;
  
  function lessonDescription () {
    if (!isLessonCompleted) {
      return normalUpcomingDetails;
    } else if (isLessonCompleted) {
      return completedDetails;
    }
  }
  
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
  // debugger
  return (
    <div className="lesson-show-container">
      <div style={{ padding: '0 30px', display: 'flex' }}>
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
          <div className="teacher-container">
            <div>
              <div>
                <p className="teacher-name">{`${teacher.firstName} ${teacher.lastName}`}</p>
                <span className="teacher-label">Teacher</span>
                {lineSeparator}
              </div>
            </div>
          </div>
          <div className="lesson-details lesson-body-padding" style={{ display: 'block' }}>
            <div style={{ display: 'flex', marginBottom: '12px' }}>
              <div style={{ marginRight: '12px' }}>
                <span className="course-detail">Language</span>
                <p>{`${language.name}`}</p>
              </div>
              <div style={{ marginRight: '12px' }}>
                <span className="course-detail">Duration</span>
                <p>{`${(lessonDuration / 60000).toString()} minutes`}</p>
              </div>
            </div>
            <div>
              <span className="course-detail">Lesson Category</span>
              {lineSeparator}
            </div>
          </div>
          <div className="lesson-body-padding lesson-communication">
            <h1>Communication Tool</h1>
            {lineSeparator}
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
              <span>
                ispeakee Language Test
              </span>
              <p className="left-content">
                Test Your Language Level
              </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LessonShow;