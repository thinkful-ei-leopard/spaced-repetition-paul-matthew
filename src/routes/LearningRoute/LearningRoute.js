import React, { Component } from 'react';
import WordCard from '../../components/WordCard/WordCard';
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
    const words = await LanguageApiService.getHead();
    await this.context.setLanguage(language.language);
    await this.context.setWords(language.words);
    await this.context.setNextWord(words.nextWord);
    this.setState({ loading: false });
  }

  render() {
    const { words, nextWord } = this.context;

    if (this.state.loading === true) {
      console.log('loading', words, nextWord);
      return <></>;
    }

    return (
      <section className="LearningRoute">
        <WordCard words={words} nextWord={nextWord}></WordCard>
      </section>
    );
  }
}

export default LearningRoute;
