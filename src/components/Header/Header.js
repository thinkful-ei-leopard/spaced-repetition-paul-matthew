import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import UserContext from '../../contexts/UserContext';
import './Header.scss';

class Header extends Component {
  static contextType = UserContext;

  handleLogoutClick = () => {
    this.context.processLogout();
  };

  renderLogoutLink() {
    return (
      <div>
        <span> Welcome, {this.context.user.name}!</span>
        <nav>
          <Link
            className="login-link"
            onClick={this.handleLogoutClick}
            to="/login">
            Logout
          </Link>
        </nav>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <nav>
        <Link className="login-link" to="/login">
          Login
        </Link>{' '}
        <Link className="register-link" to="/register">
          Sign up
        </Link>
      </nav>
    );
  }

  render() {
    return (
      <header>
        <h1>
          <Link className="spaced-repetition-header" to="/">
            Language Teacher
          </Link>
        </h1>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </header>
    );
  }
}

export default Header;
