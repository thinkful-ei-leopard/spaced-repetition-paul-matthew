import React, { Component } from 'react';
import WordCard from '../../components/WordCard/WordCard';
import LanguageContext from '../../contexts/LanguageContext';
import LanguageApiService from '../../services/language-api-service';
import './LearningRoute.scss';

class LearningRoute extends Component {
  static contextType = LanguageContext;

  componentDidMount() {
    this.getLanguageAndWords();
  }

  async getLanguageAndWords() {
    const language = await LanguageApiService.getLanguage();
    this.context.setLanguage(language.language);
    this.context.setWords(language.words);
  }

  render() {
    const { words } = this.context;
    return (
      <section className="LearningRoute">
        <WordCard words={words}></WordCard>
      </section>
    );
  }
}

export default LearningRoute;
