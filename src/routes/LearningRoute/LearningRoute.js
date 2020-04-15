import React, { Component } from 'react';
import WordCard from '../../components/WordCard/WordCard';
import AnswerCard from '../../components/AnswerCard/AnswerCard';
import LanguageContext from '../../contexts/LanguageContext';
import LanguageApiService from '../../services/language-api-service';
import './LearningRoute.scss';

class LearningRoute extends Component {
  state = { loading: true };

  static contextType = LanguageContext;

  componentDidMount() {
    this.getLanguageAndWords();
  }

  async getLanguageAndWords() {
    const language = await LanguageApiService.getLanguage();
    this.context.setLanguage(language.language);
    this.context.setWords(language.words);

    const word = await LanguageApiService.getHead();
    this.context.setNextWord(word.nextWord);
    this.context.setTotalScore(word.totalScore);
    this.context.setWordCorrectCount(word.wordCorrectCount);
    this.context.setWordIncorrectCount(word.wordIncorrectCount);
    this.setState({ loading: false });
  }

  handleFormSubmit() {
    
  }

  render() {
    const {
      nextWord,
      totalScore,
      wordCorrectCount,
      wordIncorrectCount,
      answered,
    } = this.context;

    console.log(this.context);

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
            wordIncorrectCount={wordIncorrectCount} />
        </section>
      );
    } else {
      return <AnswerCard totalScore={totalScore} />;
    }
  }
}

export default LearningRoute;
