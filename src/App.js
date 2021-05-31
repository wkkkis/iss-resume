import React from "react";
import "./App.css";
import {AboutMe, Education, Footer, Header, Portfolio, Skills} from "./components";

function App() {
    return (
        <>
            <Header/>
            <AboutMe/>
            <Skills/>
            <Education/>
            <Portfolio/>
            <Footer/>
        </>
    );
}

export default App;
