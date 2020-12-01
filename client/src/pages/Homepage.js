import React from "react";
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



function Homepage() {
  return (
    // <Container>
    <div>
      <NavbarHP />
      <SignIn />
      <About />
      <Mission />

      {/* </Container> */}
      <StickyFooter />
    </div>

  );
}


export default Homepage;
