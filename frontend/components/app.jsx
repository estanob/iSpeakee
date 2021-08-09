import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavbarContainer from '../components/navbar/navbar_container';
import DashboardContainer from './dashboard/dashboard_container';
import Splash from '../components/splash';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/sign_up_form_container';
import LanguageIndexContainer from './languages/index/language_index_container';
import LanguageShowContainer from './languages/show/language_show_page_container';

const App = () => {
  return (
    <div>
      <header className="inner-header">
        <NavbarContainer />
      </header>
      <Switch>
        <ProtectedRoute path='/dashboard' component={DashboardContainer} />
        <ProtectedRoute path="/languages/:id" component={LanguageShowContainer} />
        <ProtectedRoute path="/languages" component={LanguageIndexContainer} />
        
        <AuthRoute exact path="/" component={Splash} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />

        {/* <Route path='/404' />
        <Redirect to="/404" /> */}
      </Switch>
    </div>
  );
};

export default App;