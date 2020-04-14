import React, { Component } from 'react';
import './WordList.scss';
import Word from '../Word/Word'

export class WordList extends Component {
  render() {
    const { words } = this.props;
    return (
      <section className="WordList">
        <h3 className="my-words-header">My words</h3>
        <ul>
          {words.map(word => <li key={word.original}><Word word={word}/></li>)}
        </ul>
      </section>
    );
  }
}

export default WordList;
