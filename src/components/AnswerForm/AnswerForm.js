import React, { Component } from 'react';
import { Input, Required, Label } from '../Form/Form';
import './AnswerForm.scss';
import Button from '../Button/Button';
import config from '../../config';
import LanguageApiService from '../../services/language-api-service';

export class AnswerForm extends Component {
  state = { error: null, value: '' };

  handleAnswerSubmit = async (e) => {
    const { value } = this.state;
    console.log(value);
    LanguageApiService.postGuess(value);
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
          <Button type="submit" className="skip-button">
            Try Later
          </Button>
        </div>
      </form>
    );
  }
}

export default AnswerForm;
