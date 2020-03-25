import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './styles/fonts.css'
import './styles/agency.css';
import './App.css';

import { Footer } from './layout/Footer';
import { TopNav } from './layout/TopNav';
import { Header } from './layout/Header';
import { About } from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import { Connect } from "./sections/Connect";
import { Education } from "./sections/Education";
import Certifications from "./sections/Certifications";

export default class App extends React.Component {

  renderPortfolioContent() {
    return (
      <>
        <About />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Skills />
        <Connect />
      </>
    );
  }

  render() {
    const portfolioContent = this.renderPortfolioContent();
    return (
      <>
        <TopNav />
        <Header />
        {portfolioContent}
        <Footer />
      </>
    );
  }
}
