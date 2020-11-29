import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./pages/Homepage";
import MemberPage from "./pages/MemberPage";
import ProfilePage from "./pages/ProfilePage";
import SignUpPage from "./pages/SignupPage";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/members" component={MemberPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
