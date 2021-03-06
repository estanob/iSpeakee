import React from 'react';
import { connect } from 'react-redux';
import { fetchLanguages } from '../../actions/language_actions';
import { fetchLanguageToStudents } from '../../actions/language_to_student_actions';
import { fetchLessons } from '../../actions/lesson_actions';
import { fetchUser, fetchAllUsers } from '../../actions/profile_actions';
import Dashboard from './dashboard';

const mSTP = (state) => {
  let session = state.session.id ? state.session.id : '';
  let currentUser = (state.session.id && state.entities.user) ? state.entities.user[state.session.id] : {};
  let users = state.entities.users ? Object.values(state.entities.users) : [];
  let languages = state.entities.languages ? Object.values(state.entities.languages) : [];
  let languageToStudents = state.entities.languageToStudents ? Object.values(state.entities.languageToStudents) : [];
  let lessons = state.entities.lessons ? Object.values(state.entities.lessons) : [];
  let coinIcon = <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><mask id="prefix__a" fill="#000" height="15" maskUnits="userSpaceOnUse" width="7" x="8.4" y="4.4"><path d="M8.4 4.4h7v15h-7z" fill="#fff"></path><path clipRule="evenodd" d="M12.012 5.4a.5.5 0 01.5.5v.562a2.614 2.614 0 012.113 2.566.5.5 0 11-1 0c0-.89-.719-1.61-1.606-1.614H12.006A1.613 1.613 0 0010.4 9.028c0 .5.254.949.655 1.299.368.322.875.835 1.36 1.33l.205.21c.42.43.813.831 1.097 1.097.515.481.908 1.163.908 1.98 0 1.272-.909 2.331-2.113 2.565v.562a.5.5 0 11-1 0v-.562A2.613 2.613 0 019.4 14.943a.5.5 0 011 0c0 .888.716 1.608 1.602 1.613H12.023a1.613 1.613 0 001.602-1.613c0-.477-.228-.91-.59-1.248a40.847 40.847 0 01-1.133-1.132l-.2-.206c-.494-.504-.972-.986-1.306-1.277-.554-.485-.996-1.188-.996-2.052 0-1.272.909-2.332 2.112-2.566V5.9a.5.5 0 01.5-.5z" fillRule="evenodd"></path></mask><g fill="#333"><path clipRule="evenodd" d="M12 2.75a9.25 9.25 0 100 18.5 9.25 9.25 0 000-18.5zM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12z" fillRule="evenodd"></path><path clipRule="evenodd" d="M12.012 5.4a.5.5 0 01.5.5v.562a2.614 2.614 0 012.113 2.566.5.5 0 11-1 0c0-.89-.719-1.61-1.606-1.614H12.006A1.613 1.613 0 0010.4 9.028c0 .5.254.949.655 1.299.368.322.875.835 1.36 1.33l.205.21c.42.43.813.831 1.097 1.097.515.481.908 1.163.908 1.98 0 1.272-.909 2.331-2.113 2.565v.562a.5.5 0 11-1 0v-.562A2.613 2.613 0 019.4 14.943a.5.5 0 011 0c0 .888.716 1.608 1.602 1.613H12.023a1.613 1.613 0 001.602-1.613c0-.477-.228-.91-.59-1.248a40.847 40.847 0 01-1.133-1.132l-.2-.206c-.494-.504-.972-.986-1.306-1.277-.554-.485-.996-1.188-.996-2.052 0-1.272.909-2.332 2.112-2.566V5.9a.5.5 0 01.5-.5z" fillRule="evenodd"></path><path d="M12.512 6.462h-.25c0 .12.085.223.203.246zm-.493.952v-.25h-.002zm-.007 0l-.001.25h.003zm-.006 0l.002-.25h-.002zm-.951 2.913l-.165.188zm1.36 1.33l.18-.174zm.205.21l.179-.175zm1.097 1.097l-.17.183zm-1.205 4.545l-.047-.246a.25.25 0 00-.203.246zm-1 0h.25a.25.25 0 00-.202-.246zm.49-.952l-.002.25h.007zm.021 0l-.005.25h.007zm1.012-2.862l-.171.183zm0 0l-.171.182zm-1.133-1.132l.18-.174zm-.2-.205l.178-.175zm-1.306-1.278l.165-.189-.008-.006zm0 0l-.164.188.008.007zm1.116-4.618l.048.246a.25.25 0 00.202-.246zm1.25-.562a.75.75 0 00-.75-.75v.5a.25.25 0 01.25.25zm0 .562V5.9h-.5v.562zm2.113 2.566a2.864 2.864 0 00-2.315-2.811l-.095.49a2.364 2.364 0 011.91 2.32zm-.75.75a.75.75 0 00.75-.75h-.5a.25.25 0 01-.25.25zm-.75-.75c0 .414.336.75.75.75v-.5a.25.25 0 01-.25-.25zm-1.357-1.364c.75.003 1.357.613 1.357 1.364h.5c0-1.027-.83-1.86-1.856-1.864zm-.004 0h.006l-.003-.5h-.006zm-.01 0h.007l.003-.5h-.006zM10.65 9.028c0-.752.607-1.36 1.357-1.364l-.002-.5a1.863 1.863 0 00-1.855 1.864zm.57 1.11c-.362-.315-.57-.7-.57-1.11h-.5c0 .591.301 1.103.74 1.487zm1.374 1.345c-.483-.494-.997-1.014-1.375-1.344l-.329.376c.36.315.86.82 1.347 1.318zm.204.209l-.204-.209-.357.35.204.208zm1.09 1.09c-.28-.262-.667-.658-1.09-1.09l-.357.35c.419.428.816.834 1.106 1.105zm.987 2.161c0-.9-.434-1.645-.987-2.161l-.341.365c.477.446.828 1.065.828 1.796zm-2.315 2.811a2.863 2.863 0 002.315-2.81h-.5c0 1.15-.822 2.108-1.91 2.32zm-.298-.245v.562h.5v-.562zm0 .562a.25.25 0 01-.25.25v.5a.75.75 0 00.75-.75zm-.25.25a.25.25 0 01-.25-.25h-.5c0 .414.336.75.75.75zm-.25-.25v-.562h-.5v.562zM9.15 14.943c0 1.395.996 2.556 2.315 2.811l.095-.49a2.363 2.363 0 01-1.91-2.32zm.75-.75a.75.75 0 00-.75.75h.5a.25.25 0 01.25-.25zm.75.75a.75.75 0 00-.75-.75v.5a.25.25 0 01.25.25zm1.353 1.364a1.362 1.362 0 01-1.353-1.364h-.5c0 1.026.827 1.857 1.85 1.864zm.004.5h.005v-.5h-.016zm.005 0h.006l.01-.5h-.016zm1.363-1.864c0 .75-.605 1.359-1.353 1.364l.003.5a1.863 1.863 0 001.85-1.864zm-.511-1.065c.324.302.511.672.511 1.065h.5c0-.562-.269-1.056-.67-1.43zm0 0l.341-.366zm-1.14-1.14c.416.426.832.852 1.14 1.14l.341-.366a40.822 40.822 0 01-1.124-1.123zm-.202-.206l.202.206.357-.35-.201-.205zm-1.29-1.264c.324.284.795.758 1.29 1.264l.358-.35c-.492-.501-.977-.991-1.319-1.29zm.008.007l.313-.39zM9.15 9.028c0 .955.49 1.722 1.082 2.24l.329-.376c-.516-.451-.911-1.091-.911-1.864zm2.315-2.811a2.864 2.864 0 00-2.315 2.81h.5c0-1.15.821-2.108 1.91-2.32zm-.203-.317v.562h.5V5.9zm.75-.75a.75.75 0 00-.75.75h.5a.25.25 0 01.25-.25z" mask="url(#prefix__a)"></path></g></svg>;
  let presentIcon = <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" fill="#333"><path clipRule="evenodd" d="M6.25 5A3.25 3.25 0 0112 2.923a3.25 3.25 0 015.24 3.827H19a2.75 2.75 0 012.75 2.75v3a.75.75 0 01-.75.75h-.75v3.25a5.75 5.75 0 01-5.75 5.75h-10a.75.75 0 01-.75-.75v-8.25H3a.75.75 0 01-.75-.75v-3A2.75 2.75 0 015 6.75h1.76A3.235 3.235 0 016.25 5zM9.5 6.75h1.75V5A1.75 1.75 0 109.5 6.75zm3.25 0h1.75A1.75 1.75 0 1012.75 5zm1.75 1.5H5c-.69 0-1.25.56-1.25 1.25v2.25h16.5V9.5c0-.69-.56-1.25-1.25-1.25zm-9.25 12.5v-7.5h13.5v3.25a4.25 4.25 0 01-4.25 4.25z" fillRule="evenodd"></path></svg>;
  let testIcon = <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" fill="#333"><g clipRule="evenodd" fillRule="evenodd"><path d="M3.25 5A2.75 2.75 0 016 2.25h12A2.75 2.75 0 0120.75 5v11A5.75 5.75 0 0115 21.75H4a.75.75 0 01-.75-.75zM6 3.75c-.69 0-1.25.56-1.25 1.25v15.25H15A4.25 4.25 0 0019.25 16V5c0-.69-.56-1.25-1.25-1.25z"></path><path d="M17.53 6.47a.75.75 0 010 1.06l-2.5 2.5a.75.75 0 01-1.06 0l-1-1a.75.75 0 011.06-1.06l.47.47 1.97-1.97a.75.75 0 011.06 0zM16.398 13.768a.75.75 0 00-1.06-1.06l-.708.706-.707-.707a.75.75 0 00-1.06 1.06l.706.708-.707.707a.75.75 0 101.06 1.06l.708-.707.707.708a.75.75 0 001.06-1.061l-.706-.707z"></path></g></svg>;
  let iTalkiImg = <img src="https://scdn.italki.com/orion/static/media/downloadApp.f4457bad.png" alt="app download" width="68"></img>;
  let bookLessonIcon = <div className="teacher-itemRight"><span className="tooltip-container-box" gap="5"><span className="tooltip-container" placement="bottom"><span className="tooltipReference"><svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" fill="#4D4D4D"><g clipRule="evenodd" fillRule="evenodd"><path d="M16 1.75a.75.75 0 01.75.75v.75H19A2.75 2.75 0 0121.75 6v10A5.75 5.75 0 0116 21.75H3a.75.75 0 01-.75-.75V6A2.75 2.75 0 015 3.25h2.25V2.5a.75.75 0 011.5 0v.75h6.5V2.5a.75.75 0 01.75-.75zm-8.75 3v.75a.75.75 0 001.5 0v-.75h6.5v.75a.75.75 0 001.5 0v-.75H19c.69 0 1.25.56 1.25 1.25v2.75H3.75V6c0-.69.56-1.25 1.25-1.25zm-3.5 5.5h16.5V16A4.25 4.25 0 0116 20.25H3.75z"></path><path d="M12.75 13.068c0-.452-.336-.818-.75-.818s-.75.366-.75.818V14.5H9.818c-.452 0-.818.336-.818.75s.366.75.818.75h1.432v1.432c0 .452.336.818.75.818s.75-.366.75-.818V16h1.432c.452 0 .818-.336.818-.75s-.366-.75-.818-.75H12.75z"></path></g></svg></span></span></span></div>;
  let lineSeparator = <div id="line-separator"></div>;
  let teacherArrow = <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" fill="#333"><path clipRule="evenodd" d="M9.72 16.28a.75.75 0 010-1.06l2.97-2.97-2.97-2.97a.75.75 0 011.06-1.06l3.5 3.5a.75.75 0 010 1.06l-3.5 3.5a.75.75 0 01-1.06 0z" fillRule="evenodd"></path></svg>;
  let levelDescriptions = 
    [
      "A1: Beginner", 
      "A2: Elementary", 
      "B1: Intermediate", 
      "B2: Upper Intermediate", 
      "C1: Advanced", 
      "C2: Proficient", 
      "Native"
    ];
  
  return {
    session: session,
    currentUser: currentUser,
    users: users,
    languages: languages,
    languageToStudents: languageToStudents,
    lessons: lessons,
    coinIcon: coinIcon,
    presentIcon: presentIcon,
    testIcon: testIcon,
    iTalkiImg: iTalkiImg,
    bookLessonIcon: bookLessonIcon,
    teacherArrow: teacherArrow,
    levelDescriptions: levelDescriptions,
    lineSeparator: lineSeparator,
    currentDate: new Date().toLocaleDateString(),
    currentTime: new Date().toLocaleTimeString(),
  };
};

const mDTP = (dispatch, ownProps) => {
  return {
    fetchUser: () => dispatch(fetchUser(parseInt(ownProps.match.params.id))),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchLanguages: () => dispatch(fetchLanguages()),
    fetchLanguageToStudents: () => dispatch(fetchLanguageToStudents()),
    fetchLessons: () => dispatch(fetchLessons()),
  }
}

export default connect(mSTP, mDTP)(Dashboard);