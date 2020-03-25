import React from "react";

export class Footer extends React.Component {

  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <span className="copyright">Copyright &copy; 2015-2020 tonelope.com</span>
            </div>
            <div className="col-md-4">
              <ul className="list-inline social-buttons">
                <li><a href="//twitter.com/tonylopez1013"><i className="fa fa-twitter"></i></a></li>
                <li><a href="//www.facebook.com/tony.lopez.3386"><i className="fa fa-facebook"></i></a></li>
                <li><a href="//www.linkedin.com/profile/view?id=210853076"><i className="fa fa-linkedin"></i></a>
                </li>
                <li><a href="//github.com/lopezton"><i className="fa fa-github"></i></a></li>
                <li><a href="//bitbucket.org/lopezton"><i className="fa fa-bitbucket"></i></a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="list-inline quicklinks">
                {/* Links here */}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}