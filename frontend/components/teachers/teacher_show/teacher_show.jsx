import React, { useEffect } from 'react';

const TeacherShow = props => {
  let { 
    teacher,
    fetchTeacher,
    redLine,
    teacherProfiles,
    fetchTeacherProfiles,
  } = props;

  useEffect(() => {
    fetchTeacher()
    fetchTeacherProfiles()
  }, []);
  
  console.log("teacher show props", props)
  
  teacher = teacher ? teacher : {};
  teacherProfiles = teacherProfiles ? teacherProfiles : [];
  redLine = redLine ? redLine : {};
  
  let teacherProfile = teacherProfiles.find(profile => {
    if (profile.teacher_id === teacher.id) return profile
  });
  teacherProfile = teacherProfile ? teacherProfile : {};
  let teacherName = teacher.display_name ? teacher.display_name : `${teacher.firstName} ${teacher.lastName}`;
  const lineSeparator = <div id="line-separator"></div>;
  
  console.log("Teacher Profile", teacherProfile)
  
  debugger
  return (
    <div className="teacher-show-container">
      <div className="teacher-about info-box">
        <div className="teacher-details">
          <h1>{teacherName}</h1>
          {redLine}
          <div className="teacher-teaches">
            <p>TEACHES</p>
            <p>HELLO</p>
          </div>
          <div className="teacher-also-speaks">
            <p>ALSO SPEAKS</p>
            <p>HELLO</p>
          </div>
        </div>
        {lineSeparator}
        <div className="teacher-about-me">
          <div className="about-me-title">
            <h1>About Me</h1>
            <p>{`ispeakee teacher since `}</p>
          </div>
          <p>{teacherProfile.about_me}</p>
          <h1>Me as a Teacher</h1>
          <p>{teacherProfile.me_as_teacher}</p>
          <h1>My Lessons & Teaching Style</h1>
          <p>{teacherProfile.lessons_teaching_style}</p>
        </div>
      </div>
      <div className="teacher-lesson-management">
        <div className="lesson-booking info-box">
          <h1>BOOK LESSON</h1>
          <h1>CONTACT TEACHER</h1>
        </div>
      </div>
    </div>
  )
};

export default TeacherShow;