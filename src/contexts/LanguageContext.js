import React, { Component } from 'react';

const LanguageContext = React.createContext({
  language: {},
  words: [],
  setLanguage: () => {},
  setWords: () => {},
});

export default LanguageContext;

export class LanguageProvider extends Component {
  state = {
    language: {},
    words: [],
  };

  setLanguage = language => {
    this.setState({ language });
  }

  getTotalIncorrect = () => {
    if(!this.state.words) {
      return 0;
    }
    let incorrect = 0;
    this.state.words.forEach(word => {
      incorrect += word.incorrect_count;
    })

    return incorrect;
  }

  setWords = words => {
    this.setState({ words });
  }

  render() {
    const value = {
      language: this.state.language,
      words: this.state.words,
      setLanguage: this.setLanguage,
      getTotalIncorrect: this.getTotalIncorrect,
      setWords: this.setWords,
    }
    return (
      <LanguageContext.Provider value={value}>
        {this.props.children}
      </LanguageContext.Provider>
    )
  }
};