import React from "react";
import { About } from "../sections/About";
import { Experience } from "../sections/Experience";
import { Projects } from "../sections/Projects";
import { Skills } from "../sections/Skills";
import { Connect } from "../sections/Connect";
import { Education } from "../sections/Education";
import { Certifications } from "../sections/Certifications";

interface SectionContainerState {
  sections: Section[];
}

interface Section {
  name: string; 
}

export class SectionContainer extends React.Component<any, SectionContainerState> {

  constructor(props: any) {
    super(props);
    this.state = {
      sections: []
    };
  }

  render() {
    return (
      <>
        <About></About>
        <Experience></Experience>
        <Projects></Projects>
        <Education></Education>
        <Certifications></Certifications>
        <Skills></Skills>
        <Connect></Connect>
      </>
    );
  }
}