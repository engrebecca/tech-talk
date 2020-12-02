import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./pages/Homepage";
import MemberPage from "./pages/MemberPage";
import ProfilePage from "./pages/ProfilePage";
import SignUpPage from "./pages/SignupPage";
import PostPage from "./pages/PostPage";
import { UserContext } from "./utils/UserContext";
import API from "./utils/API";

function App() {
  const [user, setUser] = useState(null);
  const [checkedUser, setCheckedUser] = useState(false);
  useEffect(() => {
    refreshUser()
  }, []);

  const refreshUser = () => {
    return API.User.getCurrent()
      .then(res => {
        setUser(() => res.data || null)
        setCheckedUser(() => true)
      })
  }
  const login = (userLoginData) => {
    return API.User.login(userLoginData)
      .then(res => setUser(() => res.data || null))
  }
  const logout = () => {
    return API.User.logout()
      .then(() => setUser(() => null))
  }

  console.log(user);
  return (
    <UserContext.Provider value={{ user, login, logout, refreshUser }}>
      <Router>
        <Switch>
          <Route exact path="/">{checkedUser && (user ? <Redirect to="/newsfeed" /> : <HomePage />)}</Route>
          <Route exact path="/signup">{checkedUser && (user ? <Redirect to="/newsfeed" /> : <SignUpPage />)}</Route>
          <Route exact path="/members">{checkedUser && (!user ? <Redirect to="/" /> : <MemberPage />)}</Route>
          <Route exact path="/newsfeed">{checkedUser && (!user ? <Redirect to="/" /> : <PostPage />)}</Route>
          <Route exact path="/profile">{checkedUser && (!user ? <Redirect to="/" /> : <ProfilePage />)}</Route>
          <Route path="*">
            {checkedUser && (user ? <Redirect to="/newsfeed" /> : <Redirect to="/" />)}
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
