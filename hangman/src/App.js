import React, { useState } from 'react';
import dictionary from './util/dictionary';
import './App.css';
import Game from './components/Game';
import GameSetup from './components/GameSetup';

const App = () => {
  const [ answer, setAnswer ] = useState("");
  const [ gameOver, setGameOver ] = useState(false);
  const [ gameOptions, setGameOptions ] = useState({});
  const [ wins, setWins ] = useState(0);
  const [ losses, setLosses ] = useState(0);

  const getNewWord = ( options = { category: "misc", difficulty: "easy" } ) => {
    const { category, difficulty } = options;
    setGameOptions({category, difficulty})
    const dictionaryCategory = dictionary[category];
    const validDictionaryTerms = dictionaryCategory[difficulty];
    const randomIndex = Math.floor(Math.random() * validDictionaryTerms.length);

    let newWord = validDictionaryTerms[randomIndex];
    setAnswer(newWord);
  }

  const isGameOver = ( displayWord, answer, guessesRemaining ) => {
    if(displayWord.join("") === answer || !guessesRemaining) {
      if(displayWord.join("") === answer) setWins(wins + 1);
      if(!guessesRemaining) setLosses(losses + 1);
      setGameOver(true);
    } else {
      setGameOver(false);
    }
  }

  const returnToSetup = () => {
    setGameOver(false);
    setAnswer("");
  }

  console.log(answer);

  const gameProps = {
    gameOver,
    isGameOver,
    answer,
    returnToSetup,
    ...gameOptions
  }
  
  return (
      <div className="App">
        <div className="stats">
            <label className="wins">Wins: </label><p>{wins}</p>
            <label className="losses">Losses: </label><p>{losses}</p>
        </div>
        { answer ? 
          <Game {...gameProps} /> :
          <GameSetup handleSetup={getNewWord} />
        }
      </div>
  )
}

export default App;