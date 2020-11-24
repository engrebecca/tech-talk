import React, { Component } from "react";
import Test from "./components/Test";
import PostComment from "./components/PostComment-Content";
import PostTitle from "./components/PostTitle";
import Avatar from "./components/Avatar";
import UserName from "./components/UserName";
import Btn1 from "./components/Btn-comments";
import Btn2 from "./components/Btn-login";
import Btn3 from "./components/Btn-post";
import Btn4 from "./components/Btn-signin";
import Btn5 from "./components/Btn-signup";
import Btn6 from "./components/Btn-submit";
import Btn7 from "./components/Btn-tags";
import "./App.css";
import CardMember from "./components/CardMember"
import Homepage from "./pages/Homepage";
import SignUp from "./components/SignUp";


function App() {
  return (
    // <Test></Test>
    // <CardMember></CardMember>
    <SignUp />
  );
}


export default App;
