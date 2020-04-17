import React, { Component } from 'react';
import './NotFoundRoute.scss';

class NotFoundRoute extends Component {
  render() {
    return (
      <section className="error-page">
        <h2 className="error-page-header"><span className="error-header-highlight">404</span> - Page not found</h2>
        <p className="error-page-message">
          Try going back to your previous page.
        </p>
      </section>
    );
  }
}

export default NotFoundRoute;
