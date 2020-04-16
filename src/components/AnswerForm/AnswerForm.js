import React, { Component } from 'react';
import { Input, Label } from '../Form/Form';
import { Link } from 'react-router-dom';
import './AnswerForm.scss';
import Button from '../Button/Button';
import LanguageApiService from '../../services/language-api-service';
import LanguageContext from '../../contexts/LanguageContext';

export class AnswerForm extends Component {
  state = { error: null, value: '' };

  static contextType = LanguageContext;

  handleAnswerSubmit = async (e) => {
    e.preventDefault();
    const { value } = this.state;
    this.setState({ value: '' });
    await LanguageApiService.postGuess(value).then((data) => {
      this.context.setAnswered(true);
      this.context.setAnswerData(data);
      if (data.isCorrect) {
        this.context.setWordCorrectCount(this.context.wordCorrectCount + 1);
      } else {
        this.context.setWordIncorrectCount(this.context.wordIncorrectCount + 1);
      }
      this.context.setTotalScore(data.totalScore);
    });
    this.props.submit(value);
  };

  handleSkip = () => {};

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
            Answer:
          </Label>
          <Input
            className="answer-input"
            type="text"
            onChange={this.handleChange}
            id="answer-input"
            name="answer"
            value={this.state.value}
            required
          />
        </div>

        <div className="button-group">
          <Button type="submit" className="answer-button">
            Submit
          </Button>
          <Link to="/">
            <Button className="skip-button">Try Later</Button>
          </Link>
        </div>
      </form>
    );
  }
}

export default AnswerForm;
