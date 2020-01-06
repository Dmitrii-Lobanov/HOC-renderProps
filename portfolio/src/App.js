import React from 'react';
import './App.css';
import './bootstrap.min.css';

import mainImg from './mainImg.jpg';

function Nav() {
  return (
    <div className="nav">
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link active" href="#">Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contacts</a>
        </li>
      </ul>
    </div>
  );
}

function Header() {
  return (
    <div className="header container">
      <div className="row">
        <img src={mainImg} alt="Dmitrii Lobanov" class="col-4 main-img rounded" />
        <div className="col-8 header-content">
          <h1>Hi, I am Dmitrii</h1>
          <p>I am a passionate Frontend Developer</p>
        </div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="Skills">
      Skills
    </div>
  );
}

function Projects() {
  return (
    <div className="projects">
      Projects
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      Footer
    </div>
  );
}

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Header />
      <Skills />
      <Projects />
      <Footer />
    </React.Fragment>
  );
}

export default App;
