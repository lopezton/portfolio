import React from "react";
import { PortfolioService } from "./services/portfolio.service";
import { Job } from "../model/job";

interface ExperienceState {
  jobs: Job[];
}

export class Experience extends React.Component<any, ExperienceState> {

  portfolioService: PortfolioService;

  constructor(props: any) {
    super(props);
    this.state = {
      jobs: []
    }
    this.portfolioService = new PortfolioService();
  }

  componentDidMount() {
    this.setState({
      jobs: this.portfolioService.getJobs()
    })
  }

  render() {
    return (
      <section id="experience" className="bg-light-1">
        <div className="container">

          <div className="row">
            <div className="col-lg-12 text-center">
              <h3 className="section-heading">Work History</h3>
              <h3 className="section-subheading text-muted">The employers crazy enough to hire me that were satisfied with the results.</h3>
            </div>
          </div>
          {
            this.state.jobs.map((job, i) => {
              return (
                <div key={i} className="row sub-row job-row">
                  <div className="col-md-3 role-info">
                    <a href={job.company.url}>{job.company.name}</a>
                    <p className="title">{job.title}</p>
                    <p className="dates">{job.startDate} - {job.endDate}</p>
                  </div>
                  <div className="col-md-9 role-short-details">
                    <ul>
                      {job.shortDetails.map((shortDetail, i) => {
                        return <li key={i}>{shortDetail}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
    );
  }
}