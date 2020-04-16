import React, { Component } from 'react';
import WordCard from '../../components/WordCard/WordCard';
import AnswerCard from '../../components/AnswerCard/AnswerCard';
import LanguageContext from '../../contexts/LanguageContext';
import LanguageApiService from '../../services/language-api-service';
import './LearningRoute.scss';

class LearningRoute extends Component {
  state = { loading: true, guess: '' };

  static contextType = LanguageContext;

  componentDidMount() {
    this.getLanguageAndWords();
  }

  getLanguageAndWords() {
    LanguageApiService.getLanguage().then((language) => {
      this.context.setLanguage(language.language);
      this.context.setWords(language.words);
    });

    LanguageApiService.getHead().then((word) => {
      this.context.setNextWord(word.nextWord);
      this.context.setTotalScore(word.totalScore);
      this.context.setWordCorrectCount(word.wordCorrectCount);
      this.context.setWordIncorrectCount(word.wordIncorrectCount);
      this.setState({ loading: false });
    });
  }

  handleFormSubmit = (guess) => {
    this.setState({ guess });
  };

  render() {
    const {
      nextWord,
      totalScore,
      wordCorrectCount,
      wordIncorrectCount,
      answered,
    } = this.context;

    if (this.state.loading === true) {
      return <></>;
    }

    if (!answered) {
      return (
        <section className="LearningRoute">
          <WordCard
            nextWord={nextWord}
            totalScore={totalScore}
            wordCorrectCount={wordCorrectCount}
            wordIncorrectCount={wordIncorrectCount}
            handleSubmit={this.handleFormSubmit}
          />
        </section>
      );
    } else {
      return <AnswerCard guess={this.state.guess} />;
    }
  }
}

export default LearningRoute;
