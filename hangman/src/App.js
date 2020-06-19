import React, { useState, useEffect } from 'react';
import dictionary from './util/dictionary';
import './App.css';
import Game from './components/Game';
import GameSetup from './components/GameSetup';

const App = () => {
  const [ answer, setAnswer ] = useState("");
  const [ gameOver, setGameOver ] = useState(false);
  const [ gameOptions, setGameOptions ] = useState({});

  const getNewWord = ( options = { category: "misc", difficulty: "easy" } ) => {
    const { category, difficulty } = options;
    const dictionaryCategory = dictionary[category];
    const validDictionaryTerms = dictionaryCategory[difficulty];
    const randomIndex = Math.floor(Math.random() * validDictionaryTerms.length);

    let newWord = validDictionaryTerms[randomIndex];
    setAnswer(newWord);
  }

  const isGameOver = ( displayWord, answer, guessesRemaining ) => {
    if(displayWord.join("") === answer || !guessesRemaining) {
      setGameOver(true);
    } else {
      setGameOver(false);
    }
  }

  const returnToSetup = () => {
    setGameOver(false);
    setAnswer("");
  }
  
  return (
      <div className="App">
        {answer}
        { answer ? 
          <Game gameOver={gameOver} isGameOver={isGameOver} answer={answer} returnToSetup={returnToSetup} /> :
          <GameSetup handleSetup={getNewWord} />
        }
      </div>
  )
}

export default App;