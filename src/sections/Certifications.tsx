import React, { useContext } from "react";
import AppContext from "../AppContext";

const Certifications = () => {
  const appContext = useContext(AppContext);
  const certifications = appContext.portfolioService.getCertifications();
  return (
    <section id="certifications">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h3 className="section-heading">Certifications</h3>
            <h3 className="section-subheading text-muted">More documentation stating that I am technically qualified in the following areas:</h3>
          </div>
        </div>
        <div className="row sub-row certification">
          {
            certifications.map((certification, i) => {
              return (
                <div key={i} className="col-sm-12">
                  <h5>{certification.title}</h5>
                  <p>
                    <span className="dateLabel">Date Certified: </span>
                    <span className="date">{certification.date}</span>
                  </p>
                  <a href={certification.url}>View Certificate</a>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  );
}

export default Certifications;