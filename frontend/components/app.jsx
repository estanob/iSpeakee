import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from "react-router-dom";

const App = () => {
  return (
    <div>
      <header className="inner-header">
        <h1>Hello</h1>
      </header>
      <Modal />
      <Switch>
        <AuthRoute exact path="/" component={Splash} />
      </Switch>
    </div>
  );
};

export default App;