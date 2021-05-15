import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Portfolio from "./components/Portfolio/Portfolio";
import FooterContainer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header/>
      <AboutMe/>
      <Skills/>
      <Education/>
      <Portfolio/>
      <FooterContainer/>
    </>
  );
}

export default App;
