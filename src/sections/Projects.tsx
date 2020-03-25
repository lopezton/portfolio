import React, { useContext, useState, FunctionComponent } from "react";
import { Project } from "../model/project";
import { Image } from "../model/image";
import AppContext from "../AppContext";

const Projects: FunctionComponent<{ initial?: number }> = ({ initial = -1 }) => {
  const appContext = useContext(AppContext);
  const projects = appContext.portfolioService.getProjects();

  const [activeProjectModalId, setProjectModalId] = useState(initial);

  function handleProjectClick(id: number) {
    setProjectModalId(id);
    document.body.className += ' modal-open';
  }

  function handleProjectModalClose() {
    setProjectModalId(initial);
    document.body.className = document.body.className.replace(' modal-open', '');
  }

  return (
    <>
      <section id="projects">
        <div className="container">

          <div className="row">
            <div className="col-lg-12 text-center">
              <h3 className="section-heading">Software Projects</h3>
              <h3 className="section-subheading text-muted">All of my hard work. Click a project to view more information about it.</h3>
            </div>
          </div>

          <div className="row">
            {projects.map((project, i) =>
              <ProjectPanel
                project={project}
                key={i}
                id={i}
                onClick={() => handleProjectClick(i)} />
            )}
          </div>

          <div className="row">
            <div className="col-lg-12 text-center">
              <h4 className="section-subheading">Public Code Repositories:</h4>
            </div>
            <div className="col-lg-12 text-center">
              <ul className="list-inline social-buttons">
                <li><a href="//github.com/lopezton" target="_blank"><i className="fa fa-github"></i></a></li>
                <li><a href="//bitbucket.org/lopezton" target="_blank"><i className="fa fa-bitbucket"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div id="portfolioModals">
        {projects.map((project, i) =>
          <ProjectModal
            project={project}
            key={i}
            id={i}
            active={activeProjectModalId === i}
            onClose={handleProjectModalClose} />
        )}
      </div>
    </>
  );
}

export default Projects;

type ProjectPanelProps = { project: Project, id: number, onClick: (id: number) => void };
class ProjectPanel extends React.Component<ProjectPanelProps> {

  render() {
    const project = this.props.project;
    const id = this.props.id;
    return (
      <div className="col-md-4 col-sm-6 portfolio-item">
        <span className="portfolio-link" onClick={() => this.props.onClick(id)}>
          <div className="portfolio-hover">
            <div className="portfolio-hover-content">
              <i className="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img src={project.thumbnailImageUrl} className="img-responsive" alt="" />
        </span>
        <div className="portfolio-caption">
          <h4>{project.title}</h4>
          <p className="text-muted">{project.shortDescription}</p>
        </div>
      </div>
    )
  }
}

type ProjectModalProps = { active: boolean, project: Project, id: number, onClose: (e: any) => void };
class ProjectModal extends React.Component<ProjectModalProps> {

  render() {
    const project = this.props.project;
    var portfolioModalClasses = 'portfolio-modal modal fade';
    if (this.props.active) {
      portfolioModalClasses += ' in';
    }
    return (
      <div className={portfolioModalClasses} id={`portfolioModal${this.props.id}`} role="dialog" aria-hidden="true">
        <div className="modal-content">
          <div className="close-modal" onClick={this.props.onClose}>
            <div className="lr">
              <div className="rl">
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                <div className="modal-body">
                  {/* Project Details Go Here */}
                  <h2>{project.title}</h2>
                  <p className="item-intro text-muted">{project.shortDescription}</p>
                  {project.link &&
                    <h5 className="text-left">
                      <a href={project.link} target="_blank">Project Website</a>
                    </h5>
                  }
                  <h5 className="text-left">About | {project.title}</h5>
                  <p className="text-justify">{project.longDescription}</p>
                  {project.images.map((image, i) => this.renderImage(image, i))}
                  <button type="button" className="btn btn-primary" onClick={this.props.onClose}><i className="fa fa-times"></i> Close Project</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderImage(image: Image, id: number) {
    return (
      <div key={id}>
        <img className="img-responsive img-centered" src={image.url} alt="" />
        <p className="imageCaption">{image.caption}</p>
      </div>
    )
  }
}