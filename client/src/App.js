import React, { Component } from "react";
// import Test from "./components/Test";
import "./App.css";
import Navbar from "./components/Navbar";
import Row from "./components/Row";
import Column from "./components/Column";
import Container from "./components/Container";

function App() {
  return (
  <div className= "name">
    <Navbar></Navbar>
    <Container></Container>
    <Column></Column> 
     <Row></Row>
   {/* <Test></Test> */}
   </div>
  );
}


export default App;
