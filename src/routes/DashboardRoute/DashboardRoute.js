import React, { Component } from 'react';

class DashboardRoute extends Component {
  render() {
    return (
      <section>
        <h2 className="language-teacher">Language Teacher</h2>
        <p className="intro-text-paragraph">
          Practice learning a language with the spaced repetition revision
          technique.
        </p>
        <img
          className="language-icon"
          src={require('../../images/language-icon.png')}
          alt="language icon"
        />{' '}
      </section>
    );
  }
}

export default DashboardRoute;
