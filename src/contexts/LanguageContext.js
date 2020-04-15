import React, { Component } from 'react';

const LanguageContext = React.createContext({
  language: {},
  words: [],
  nextWord: '',
  totalScore: 0,
  wordCorrectCount: 0,
  wordIncorrectCount: 0,
  answered: false,
  answerData: {},
  setLanguage: () => {},
  setWords: () => {},
  setNextWord: () => {},
  setTotalScore: () => {},
  setWordCorrectCount: () => {},
  setWordIncorrectCount: () => {},
  setAnswered: () => {},
});

export default LanguageContext;

export class LanguageProvider extends Component {
  state = {
    language: {},
    words: [],
    nextWord: '',
    totalScore: 0,
    wordCorrectCount: 0,
    wordIncorrectCount: 0,
    answered: false,
    answerData: {}
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

  setTotalScore = (totalScore) => {
    this.setState({ totalScore });
  };

  setWordCorrectCount = (wordCorrectCount) => {
    this.setState({ wordCorrectCount });
  };

  setWordIncorrectCount = (wordIncorrectCount) => {
    this.setState({ wordIncorrectCount });
  };

  setAnswered = (answered) => {
    this.setState({ answered });
  };

  setAnswerData = (answerData) => {
    this.setState({ answerData });
  }

  render() {
    const value = {
      language: this.state.language,
      words: this.state.words,
      nextWord: this.state.nextWord,
      totalScore: this.state.totalScore,
      answered: this.state.answered,
      wordCorrectCount: this.state.wordCorrectCount,
      wordIncorrectCount: this.state.wordIncorrectCount,
      answerData: this.state.answerData,
      setLanguage: this.setLanguage,
      getTotalIncorrect: this.getTotalIncorrect,
      setWords: this.setWords,
      setNextWord: this.setNextWord,
      setTotalScore: this.setTotalScore,
      setWordCorrectCount: this.setWordCorrectCount,
      setWordIncorrectCount: this.setWordIncorrectCount,
      setAnswered: this.setAnswered,
      setAnswerData: this.setAnswerData
    };
    return (
      <LanguageContext.Provider value={value}>
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}
