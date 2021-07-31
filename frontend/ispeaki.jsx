import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const rootEle = document.getElementById('root');
  let store;
  if (window.currentUser) {
    debugger
    const preloadedState = {
      entities: {
        user: { [window.currentUser.id]: window.currentUser},
        // users: { [window.currentUser.id]: window.currentUser}
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  ReactDOM.render(<Root store={store} />, rootEle);
});