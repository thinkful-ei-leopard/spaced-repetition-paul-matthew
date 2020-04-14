import React, { Component } from 'react';
import { Input, Required, Label } from '../Form/Form';
import './AnswerForm.scss';
import Button from '../Button/Button';

export class AnswerForm extends Component {
  state = { error: null };

  handleSubmit = (e) => {
    e.preventDefault();
    const { answer } = e.target;
  };

  render() {
    const { error } = this.state;

    return (
      <form className="AnswerForm" onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p>{error}</p>}</div>
        <div className="input-group">
          <Label className="answer-label" htmlFor="answer-input">
            {' '}
            Answer:
          </Label>
          <Input
            className="answer-input"
            // ref={this.firstInput}
            id="answer-input"
            name="answer"
          />
        </div>

        <div className="button-group">
          <Button type="submit" className="answer-button">
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
