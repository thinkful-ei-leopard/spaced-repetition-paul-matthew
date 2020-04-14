import React from 'react';
import './Word.scss';

function Word(props) {
  const { word } = props;
  return (
    <div onClick={(e) => handleWordClick(word.original)}>
      <p className="word-name">{word.original}</p>
      <div id={word.original} className="word-score-box hidden">
        <p>
          total correct:{' '}
          <span className="correct-count">{word.correct_count}</span>
        </p>
        <p>
          total incorrect:{' '}
          <span className="incorrect-count">{word.incorrect_count}</span>
        </p>
      </div>
    </div>
  );
}

const handleWordClick = (word) => {
  document.getElementById(word).classList.toggle('hidden');
};

export default Word;
