import React, { Component } from 'react';
import './WordCard.scss';
import AnswerForm from '../AnswerForm/AnswerForm';

export class WordCard extends Component {
  render() {
    const {
      words,
      nextWord,
      wordCorrectCount,
      wordIncorrectCount,
    } = this.props;

    console.log(wordCorrectCount, wordIncorrectCount, nextWord);

    return (
      <section className="WordCard">
        <h2 className="translate-header">Translate the word:</h2>
        <p className="original-word">"{nextWord}"</p>
        <AnswerForm />
        <div className="word-score-count">
          <p className="times-correct">
            Times correct:{' '}
            <span className="correct-number">{wordCorrectCount}</span>{' '}
          </p>
          <p className="times-incorrect">
            Times incorrect:{' '}
            <span className="incorrect-number">{wordIncorrectCount}</span>{' '}
          </p>
        </div>
      </section>
    );
  }
}

export default WordCard;
