import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects/Projects";
import { Qualifications } from './components/Qualifications/Qualifications';
import { Experience } from './components/Experience/Experience';
import { Contact } from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
        <Qualifications />
        <Experience />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
