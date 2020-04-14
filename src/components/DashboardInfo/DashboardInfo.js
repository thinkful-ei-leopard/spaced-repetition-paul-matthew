import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DashboardInfo.scss';
export class DashboardInfo extends Component {

  render() {
    const { language, incorrect } = this.props;
    return (
      <>
        <h2 className="language-teacher">Language Teacher</h2>
        <p className="intro-text-paragraph">
          Practice learning a language with the spaced repetition revision
          technique.
        </p>
        <h3 className="current-language">
          Language: <span className="language-highlight">{language.name}</span>
        </h3>
        {/* <img
          className="language-icon"
          src={require('../../images/language-icon.png')}
          alt="language icon"
        />{' '} */}
        <div className="total-score-box">
          <p>
      total correct: <span className="correct-count">{language.total_score || 0}</span>
          </p>
          <p>
      total incorrect: <span className="incorrect-count">{incorrect}</span>
          </p>
        </div>

        <Link to="/learn" className="start-button">
          <p className="start-button-text"> Start practicing! </p>
        </Link>
      </>
    );
  }
}

export default DashboardInfo;
