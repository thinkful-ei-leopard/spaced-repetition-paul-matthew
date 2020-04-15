import React, { Component } from 'react';
import { Input, Label } from '../Form/Form';
import './AnswerForm.scss';
import Button from '../Button/Button';
import LanguageApiService from '../../services/language-api-service';
import LanguageContext from '../../contexts/LanguageContext';

export class AnswerForm extends Component {
  state = { error: null, value: '' };

  static contextType = LanguageContext;

  handleAnswerSubmit = async (e) => {
    const { value } = this.state;
    console.log(value);
    await LanguageApiService.postGuess(value)
      .then(data => {
        this.context.setAnswered(true);
        this.context.setAnswerData(data);
        this.context.setTotalScore(data.totalScore);
      });
  };

  handleSkip = () => {

  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { error } = this.state;

    return (
      <form className="AnswerForm" onSubmit={this.handleAnswerSubmit}>
        <div role="alert">{error && <p>{error}</p>}</div>
        <div className="input-group">
          <Label className="answer-label" htmlFor="answer-input">
            {' '}
            Answer:
          </Label>
          <Input
            className="answer-input"
            // ref={this.firstInput}
            onChange={this.handleChange}
            id="answer-input"
            name="answer"
            value={this.state.value}
            required
          />
        </div>

        <div className="button-group">
          <Button
            type="submit"
            className="answer-button"
            onClick={(e) => {
              e.preventDefault();
              this.handleAnswerSubmit(this.state.value);
              this.setState({ value: '' });
            }}>
            Submit
          </Button>
          <Button
            type="submit"
            className="skip-button"
            onClick={this.handleSkip}>
            Try Later
          </Button>
        </div>
      </form>
    );
  }
}

export default AnswerForm;
