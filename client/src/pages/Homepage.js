import React, { Component } from "react";
// import Test from "./components/Test";
// import "./App.css";
// import CardUser from "../components/CardUser"
// import Homepage from "./pages/Homepage";
import SignIn from "../components/SignIn";
// import Container from "./components/Container";
import BtnSignup from "../components/Btn-signup";
import Navbar from "../components/Navbar";


function Homepage() {
  return (
    // <Container>
    <div>
    <Navbar></Navbar>
    <SignIn></SignIn>
   {/* </Container> */}
    </div>
  
  );
}


export default Homepage;
