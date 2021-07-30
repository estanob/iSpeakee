import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Navbar from '../components/navbar/navbar';
import HomeFeedContainer from '../components/home_feed/home_feed_container';
import Splash from '../components/splash';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/sign_up_form_container';

const App = () => {
  return (
    <div>
      <header className="inner-header">
        <Navbar />
      </header>
      <Switch>
        <ProtectedRoute path='/home' component={HomeFeedContainer} />
        
        <AuthRoute exact path="/" component={Splash} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />

        <Route path='/404' />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
};

export default App;