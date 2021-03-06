import React, { Component } from 'react';
import LanguageContext from '../../contexts/LanguageContext';
import './AnswerCard.scss';

export class AnswerCard extends Component {
  static contextType = LanguageContext;

  handleNextWord = () => {
    this.context.setNextWord(this.context.answerData.nextWord);
    this.context.setWordCorrectCount(this.context.answerData.wordCorrectCount);
    this.context.setWordIncorrectCount(
      this.context.answerData.wordIncorrectCount
    );
    this.context.setAnswerData({});
    this.context.setAnswered(false);
  };

  render() {
    const {
      nextWord,
      answerData,
      wordCorrectCount,
      wordIncorrectCount,
      totalScore,
    } = this.context;

    return (
      <div className="AnswerCard">
        <p className="total-score">
          Your total score is:{' '}
          <span className="total-score-number">{totalScore}</span>
        </p>

        <h2 className="answer-status-header">
          You are{' '}
          <span className="answer-status">
            {answerData.isCorrect ? (
              <span className="correct-answer-notify">correct!</span>
            ) : (
              <span className="incorrect-notify">incorrect!</span>
            )}
          </span>
        </h2>
        <p className="answer-status-subheader">
          {answerData.isCorrect
            ? 'Awesome job! You got it right!'
            : "Good guess, but you weren't quite right."}
        </p>
        <p className="correct-answer">
          The correct translation for {nextWord} is{' '}
          <span className="correct-translation-word">{answerData.answer}</span>.
        </p>
        <p className="user-guess">
          Your answer was{' '}
          <span className="guessed-word">{this.props.guess}</span>.
        </p>

        <button
          className="next-word-button"
          type="submit"
          onClick={this.handleNextWord}>
          Try another word!
        </button>

        <div className="answer-word-score-count">
          <p className="answer-times-correct">
            Times correct:{' '}
            <span className="correct-number">{wordCorrectCount}</span>{' '}
          </p>
          <p className="answer-times-incorrect">
            Times incorrect:{' '}
            <span className="incorrect-number">{wordIncorrectCount}</span>{' '}
          </p>
        </div>
      </div>
    );
  }
}

export default AnswerCard;
