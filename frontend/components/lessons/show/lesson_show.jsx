import React, { useEffect } from 'react';

const LessonShow = props => {
  let {
    session,
    lesson,
    users,
    fetchLesson,
    fetchAllUsers,
  } = props;
  
  session = session ? session : '';
  lesson = lesson ? lesson : {};
  users = users ? users : [];
  
  let teacher = users.find(user => {
    if (lesson.teacher_id === user.id) return user
  });

  teacher = teacher ? teacher : {};

  console.log("Teacher for this lesson: ", teacher)

  useEffect(() => {
    fetchLesson()
    fetchAllUsers()
  }, [])
  
  console.log("Lesson Show Props", props)
  return (
    <div className="lesson-show-container">
      <div className="lesson-show-details">
        <h1>HELLO WORLD</h1>
        <p>{`Your teacher will be: ${teacher.firstName} ${teacher.lastName}`}</p>
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