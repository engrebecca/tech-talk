import React, { useContext } from "react";
// import Test from "./components/Test";
// import "./App.css";
// import CardUser from "../components/CardUser"
// import Homepage from "./pages/Homepage";
import SignIn from "../components/SignIn";
// import Container from "./components/Container";
import BtnSignup from "../components/Btn-signup";
import NavbarHP from "../components/NavbarHP";
import About from "../components/About";
import Mission from "../components/Mission";
// import StickyFooter from "../components/StickyFooter";
import { UserContext } from "../utils/UserContext";
import { Redirect } from "react-router-dom";



function Homepage() {
  const { user, login, logout, refreshUser } = useContext(UserContext);
  console.log(user);
  if (user) {
    return <Redirect to="/members" />
  }
  return (
    // <Container>
    <div>
      <NavbarHP />
      <SignIn />
      <About />
      <Mission />

      {/* </Container> */}
    </div>

  );
}


export default Homepage;
