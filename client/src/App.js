// import React, { Component } from "react";
import React from "react";
// import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// import Navbar from "./components/Navbar";
import HomePage from "./pages/Homepage";
// import MembersPage from "./pages/Members";
// import SignInPage from "./pages/SignIn";
// import ProfilePage from "./pages/Profile";
// import LogOutPage from "./pages/LogOut";

function App() {
  return (
    <div>
      {/* <Router> */}
        {/* <Navbar></Navbar> */}
        {/* <Switch>
          <Route path="/" exact> */}
            <HomePage></HomePage>
          {/* </Route> */}
          {/* <Route path="/Members" exact>
            <MembersPage></MembersPage>
          </Route> */}
          {/* <Route path="/SignIn" exact>
            <SignInPage></SignInPage>
          </Route>
          <Route path="/Profile" exact>
            <ProfilePage></ProfilePage>
          </Route> */}
          {/* <Route path="/LogOut" exact>
            <LogOutPage></LogOutPage>
          </Route> */}
          {/* <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router> */}


    </div>

  );
}

export default App;
