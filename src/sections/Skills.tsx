import React, { useContext } from "react";
import AppContext from "../AppContext";

export const Skills = () => {
  const appContext = useContext(AppContext);
  const skills = appContext.portfolioService.getSkills().sort((a, b) => a.title.localeCompare(b.title));
  return (
    <section id="skills" className="bg-light-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h3 className="section-heading">My Skills</h3>
            <h3 className="section-subheading text-muted">All of the skills and tools I think I'm good at using.</h3>
          </div>
        </div>
        <div className="row">
          {
            skills.map((skill, i) => {
              return (
                <div key={i} id={`skill_${i + 1}`} className="skill" ng-repeat="skill in skills | orderBy:'title'">
                  <a href={skill.link} title={skill.title}>
                    {/* <span className="img-responsive img-centered logoSprite" alt="{skill.title}" style="background-position: 125px -{$index * 125}px;"></span> */}
                    {skill.title}
                  </a>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  );
}

export default Skills;