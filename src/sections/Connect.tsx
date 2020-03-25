import React from "react";

export class Connect extends React.Component {

  render() {
    return (
      <section id="connect">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">Connect With Me</h2>
              <h3 className="section-subheading text-muted">Want to hire me? Want to grab some lunch? Drop me a message!</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="alert alert-warning" role="alert">
                <p>If you would like to contact me, please feel free to contact me via email at: <a href="mailto:tony.lopez1013@gmail.com">tony.lopez1013@gmail.com</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}