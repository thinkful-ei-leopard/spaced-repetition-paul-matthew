import React, { Component } from 'react';
import './DashboardRoute.scss';
import WordList from '../../components/WordList/WordList'
import DashboardInfo from '../../components/DashboardInfo/DashboardInfo'
import LanguageContext from '../../contexts/LanguageContext'
import LanguageApiService from '../../services/language-api-service';

class DashboardRoute extends Component {
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
    return (
      <section className="Dashboard">
        <DashboardInfo language={this.context.language} incorrect={this.context.getTotalIncorrect()} />
        <WordList words={this.context.words}/>
      </section>
    );
  }
}

export default DashboardRoute;
