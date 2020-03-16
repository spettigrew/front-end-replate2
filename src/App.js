import React from "react";
import "./css/App.css";
import BusinessLoginForm from "./components/Business/BusinessLoginForm";
import VolunteerLoginForm from "./components/Volunteer/VolunteerLoginForm";
import BusinessRegisterApp from "./components/Business/BusinessRegisterApp";
import VolunteerRegisterApp from "./components/Volunteer/VolunteerRegisterApp";
import BusinessDashboard from "./components/Business/BusinessDashboard";
import VolunteerDashboard from "./components/Volunteer/VolunteerDashboard";
import Requests from "./components/Requests/Requests";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUp from "./components/SignUp";
import PrivateRoute from "./utils/PrivateRoute";
import { connect } from "react-redux";

function App() {
 return (
  <main>
   <nav>
    <p className="future-image">The "logo" will be here</p>
    <h1>Replate</h1>
   </nav>
   <BrowserRouter>
    <Switch>
     <Route exact path="/" render={props => <SignUp />} />
     <Route
      path="/business/register"
      render={props => <BusinessRegisterApp />}
     />
     <Route
      path="/volunteer/register"
      render={props => <VolunteerRegisterApp />}
     />
     <Route path="/volunteer/login" render={props => <VolunteerLoginForm />} />
     <Route path="/volunteer/home" render={props => <VolunteerDashboard />} />
     <Route path="/business/login" render={props => <BusinessLoginForm />} />
     <PrivateRoute
      path="/business/home"
      render={props => <BusinessDashboard />}
     />
     <Route path="/requests" render={props => <Requests />} />
    </Switch>
   </BrowserRouter>
  </main>
 );
}
export default connect(null, {})(App);
