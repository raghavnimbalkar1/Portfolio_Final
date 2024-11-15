import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import ContactLinks from "./components/ContactLinks";
import "./styles.css";

function App() {
  return (
    <div className="App container">
      <Header />
      <About />
      <Education />
      <WorkExperience />
      <Projects />
      <Skills />
      <ContactLinks />
    </div>
  );
}

export default App;
