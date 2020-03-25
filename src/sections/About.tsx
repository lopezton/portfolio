import React from "react";

export class About extends React.Component {

  render() {
    return (
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">About Me</h2>
              <h3 className="section-subheading text-muted">My entire life... contained within a few &lt;div&gt; containers.</h3>
            </div>
          </div>
          <div className="row hidden-sm hidden-md hidden-lg">
            <img src="img/team/tony.jpg" className="img-responsive img-circle margin-ctr" alt="" />
          </div>
          <div className="row">
            <div className="col-sm-8">
              <div className="row">
                <div className="col-xs-12">
                  <h4>Professional</h4>
                  <p className="text-justify">As mentioned in the tagline above, I create quality software. In all of my professional, I am very driven and motivated to raise the bar on everything that I attach my name to. My ideas, actions, and work ethic are key features that drive my quality of output. I am not afraid to work with others, work hard, or work long hours. I am not afraid to try, fail, or succeed.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 hidden-xs">
              <div className="team-member">
                <i className="fa fa-laptop"></i>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 hidden-xs">
              <div className="team-member">
                <img src="img/team/tony.jpg" className="img-responsive img-circle" alt="" />
              </div>
            </div>
            <div className="col-sm-8">
              <div className="row">
                <div className="col-xs-12">
                  <h4>Personal</h4>
                  <p className="text-justify">Outside of my professional career, I enjoy being active and accomplishing life goals. I have completed 3 marathons and 11 half-marathons. If I see an opportunity to play a sport in my free-time, I rarely pass it up.</p>
                  <p className="text-justify">I'm a very active tennis player. I played college tennis at the University of Nebraska-Kearney, played in several professional qualifying events, and in 2017 I achieved a U.S. national ranking in the Men's Open Division. I love a good game of tennis regardless of who I am playing with. It is a beautiful one-on-one sport that I believe brings out the best in people who play it.</p>
                  <p className="text-justify">I was born and raised in Omaha Nebraska, have spent a fair amount of time in Ames Iowa, and most recently have been living in Sydney Australia. I am currently seeking new residence with my wife, Stephanie, and our “pomchi” canine companion, Fibi.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-8">
              <div className="row">
                <div className="col-xs-12">
                  <h4>Resume</h4>
                  <p className="text-justify">I do my best to keep relevant professional information below but if you'd like to download a copy of my full resume I have made that available here.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="team-member">
                <a id="getResume" href="content/tlopez-resume.pdf" target="_blank">
                  <i className="fa fa-file resumeLogo hidden-xs"></i>
                  <br />
                  <br />
                  <span className="btn btn-primary btn-lg">Get Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}