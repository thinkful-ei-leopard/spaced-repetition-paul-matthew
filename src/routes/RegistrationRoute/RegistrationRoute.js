import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import './RegistrationRoute.scss';

class RegistrationRoute extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  handleRegistrationSuccess = () => {
    const { history } = this.props;
    history.push('/login');
  };

  render() {
    return (
      <section className="intro-section">
        <h2 className="language-teacher">Language Teacher</h2>

        <p className="intro-text-paragraph">
          Practice learning a language with the spaced repetition revision
          technique.
        </p>
        <img
          className="language-icon"
          src={require('../../images/language-icon.png')}
          alt="language icon"
        />
        <div className="intro-text">
          <h3 className="sign-up-header">Sign up</h3>
          <RegistrationForm
            onRegistrationSuccess={this.handleRegistrationSuccess}
          />
        </div>
        <Link className="ask-account" to="/login">
          Already have an account?
        </Link>
      </section>
    );
  }
}

export default RegistrationRoute;
