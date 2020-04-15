import React, { Component } from 'react';

const LanguageContext = React.createContext({
  language: {},
  words: [],
  nextWord: '',
  totalScore: '',
  wordCorrectCount: 0,
  wordIncorrectCount: 0,
  setLanguage: () => {},
  setWords: () => {},
  setNextWord: () => {},
});

export default LanguageContext;

export class LanguageProvider extends Component {
  state = {
    language: {},
    words: [],
    nextWord: ''
  };

  setLanguage = (language) => {
    this.setState({ language });
  };

  getTotalIncorrect = () => {
    if (!this.state.words) {
      return 0;
    }
    let incorrect = 0;
    this.state.words.forEach((word) => {
      incorrect += word.incorrect_count;
    });

    return incorrect;
  };

  setWords = (words) => {
    this.setState({ words });
  };

  setNextWord = (nextWord) => {
    this.setState({ nextWord });
  };

  render() {
    const value = {
      language: this.state.language,
      words: this.state.words,
      nextWord: this.state.nextWord,
      setLanguage: this.setLanguage,
      getTotalIncorrect: this.getTotalIncorrect,
      setWords: this.setWords,
      setNextWord: this.setNextWord,
    };
    return (
      <LanguageContext.Provider value={value}>
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}
