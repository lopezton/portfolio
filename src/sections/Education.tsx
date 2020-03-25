import React from "react";

export class Education extends React.Component {

  render() {
    return (
      <section id="education" className="bg-light-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h3 className="section-heading">Education</h3>
              <h3 className="section-subheading text-muted">All the proof on paper that says I should know what I'm doing.</h3>
            </div>
          </div>
          <div className="row sub-row education">
            <div className="col-md-3">
              <h5 className="service-heading">University of Nebraska-Kearney</h5>
            </div>
            <div className="col-md-9">
              <p>
                <span className="label label-normal">Date of Graduation:</span>
                <span className="text-muted">December 2012</span>
                <br />
                <span className="label label-normal">Major:</span>
                <span className="text-muted">Bachelors of Science in Mathematics</span>
                <br />
                <span className="label label-normal">Minor:</span>
                <span className="text-muted">Computer Science</span>
                <br />
                <span className="label label-normal">Other:</span>
                <span className="text-muted">Actuarial Science, K-12 Math Education</span>
              </p>
            </div>
          </div>

          <div className="row sub-row education">
            <div className="col-md-3">
              <h5 className="service-heading">Omaha Central HS</h5>
            </div>
            <div className="col-md-9">
              <p>
                <span className="label label-normal">Date of Graduation:</span>
                <span className="text-muted">May 2006</span>
                <br />
                <span className="label label-normal">Focus:</span>
                <span className="text-muted">Computer Science, Mathematics</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}