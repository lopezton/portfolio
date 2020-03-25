import React from "react";

export class Header extends React.Component {

  render() {
    return (
      <header>
        <div className="container">
          <div className="intro-text">
            <div className="intro-heading">Hello.</div>
            <div className="intro-lead-in">My name is Tony Lopez.</div>
            <div className="intro-lead-in">I make quality software.</div>
            <a href="#about" className="page-scroll btn btn-xl">Tell Me More</a>
          </div>
        </div>
      </header>
    );
  }
}