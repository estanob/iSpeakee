import React, { useEffect } from 'react';

const LessonShow = props => {
  let {
    session,
    lesson,
    users,
    languages,
    fetchLesson,
    fetchAllUsers,
    fetchLanguages,
  } = props;
  
  session = session ? session : '';
  lesson = lesson ? lesson : {};
  users = users ? users : [];
  languages = languages ? languages : [];
  
  let lessonDate = new Date(lesson.when).toLocaleDateString();

  let teacher = users.find(user => {
    if (lesson.teacher_id === user.id) return user
  });

  let language = languages.find(language => {
    if (lesson.language_id === language.id) return language
  });

  teacher = teacher ? teacher : {};
  language = language ? language : {};

  console.log("Teacher for this lesson: ", teacher)

  useEffect(() => {
    fetchLesson()
    fetchAllUsers()
    fetchLanguages()
  }, [])
  
  console.log("Lesson Show Props", props)
  return (
    <div className="lesson-show-container">
      <div className="lesson-show-details">
        <h1>HELLO WORLD</h1>
        <span className="lesson-date">{`${lessonDate}`}</span>
        <p className="teacher-name">{`${teacher.firstName} ${teacher.lastName}`}</p>
        <span className="teacher-label">Teacher</span>
        <div className="lesson-details lesson-body-padding">
          <div>
            <span className="course-detail">Language</span>
            <p>{`${language.name}`}</p>
          </div>
          <div>
            <span className="course-detail">Duration</span>
            <p></p>
          </div>
        </div>
        <div className="lesson-body-padding lesson-communication">
          <h1>Communication Tool</h1>
        </div>
      </div>
      <div className="lesson-other-details">
        <div className="lesson-show-status">
          <h1>Hello</h1>
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
  );
};

export default LessonShow;