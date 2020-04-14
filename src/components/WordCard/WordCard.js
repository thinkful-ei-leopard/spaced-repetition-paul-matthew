import React, { Component } from 'react';
import './WordCard.scss';
import AnswerForm from '../AnswerForm/AnswerForm';

export class WordCard extends Component {
  state = { loading: true };

  componentDidMount() {
    this.setState({ loading: false });
  }

  render() {
    const { words } = this.props;
    console.log(words);

    if (this.state.loading === true) {
      return <></>;
    }

    return (
      <section className="WordCard">
        <h2 className="translate-header">Translate the word:</h2>
        <p className="original-word">"cerveza"</p>
        <AnswerForm />
        <div className="word-score-count">
          <p className="times-correct">
            Times correct: <span className="correct-number">7</span>{' '}
          </p>
          <p className="times-incorrect">
            Times incorrect: <span className="incorrect-number">10</span>{' '}
          </p>
        </div>
      </section>
    );
  }
}

export default WordCard;
