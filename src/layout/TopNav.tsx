import React from "react";

type TopNavState = {
  navbarShrink: boolean,
  navbarActive: boolean
}

export class TopNav extends React.Component<any, TopNavState> {

  constructor(props: any) {
    super(props);
    this.state = {
      navbarShrink: false,
      navbarActive: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => this.setState({ navbarShrink: window.scrollY >= 300 }));
  }

  handleOpenNavbar = () => {
    this.setState({ navbarActive: true });
  }

  handleCloseNavbar = () => {
    this.setState({ navbarActive: false });
  }

  render() {
    let navBarClassName = 'navbar navbar-default navbar-fixed-top';
    if (this.state.navbarShrink) {
      navBarClassName += ' navbar-shrink';
    }

    let navBarMenuClassName = 'collapse navbar-collapse';
    if (this.state.navbarActive) {
      navBarMenuClassName += ' in';
    }
    return (
      <nav className={navBarClassName}>
        <div className="container">

          <div className="navbar-header page-scroll">
            <button type="button" className="navbar-toggle" onClick={this.handleOpenNavbar}>
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">Tony Lopez</a>
          </div>

          <div className={navBarMenuClassName} id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li className="hidden">
                <a href="#page-top" onClick={this.handleCloseNavbar}></a>
              </li>
              <li>
                <a href="content/tlopez-resume.pdf" target="_blank" onClick={this.handleCloseNavbar}>Resume</a>
              </li>
              <li>
                <a className="page-scroll" href="#about" onClick={this.handleCloseNavbar}>About</a>
              </li>
              <li>
                <a className="page-scroll" href="#experience" onClick={this.handleCloseNavbar}>Experience</a>
              </li>
              <li>
                <a className="page-scroll" href="#projects" onClick={this.handleCloseNavbar}>Projects</a>
              </li>
              <li>
                <a className="page-scroll" href="#skills" onClick={this.handleCloseNavbar}>Skills</a>
              </li>
              <li>
                <a className="page-scroll" href="#connect" onClick={this.handleCloseNavbar}>Connect</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}