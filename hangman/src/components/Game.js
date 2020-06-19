import React, { useState, useEffect } from 'react';
import GuessForm from './GuessForm';

const Game = ({ gameOver, isGameOver, answer, returnToSetup }) => {
    const [ displayWord, setDisplayWord ] = useState([]);
    const [ guessesRemaining, setGuessesRemaining ] = useState(6);
    const [ guesses, setGuesses ] = useState([]);
    const [ guessesObj, setGuessesObj ] = useState({});

    const getDisplayWord = () => {
        let underscores = [];
        for(let char of answer) {
          if(char === " ") {
            underscores.push(" ");
          } else {
            underscores.push("_");
          }
        }
        setDisplayWord(underscores);
    }

    useEffect(() => {
        getDisplayWord();
    }, [])
  
    useEffect(() => {
      isGameOver(displayWord, answer, guessesRemaining);
    }, [displayWord, guessesRemaining])
  
    const handleGuess = ( guess ) => {
      let guessFound = false;
      let newDisplayWord = [...displayWord];
      for(let i = 0; i < answer.length; i ++) {
        if(answer[i] === guess.toLowerCase()) {
          newDisplayWord[i] = guess.toLowerCase();
          setDisplayWord(newDisplayWord);
          guessFound = true;
        }
      }

      let newGuessesObj = {...guessesObj};
      newGuessesObj[guess.toLowerCase()] = 1;
      setGuessesObj(newGuessesObj);

      let newGuesses =[...guesses, guess.toLowerCase()];
      setGuesses(newGuesses);
  
      if(!guessFound) {
        setGuessesRemaining(guessesRemaining - 1);
      }
    }

    const handleReplay = () => {
      setGuessesRemaining(6);
      setGuesses([]);
      setGuessesObj({});
      setDisplayWord([]);
    }
  
    useEffect(() => {
      if(!displayWord.length && gameOver) {
        returnToSetup();
      }
    }, [displayWord])
    
    return (
        <div className="game">
          { gameOver ? (!guessesRemaining ? <p className="gameLose">Out of Moves!</p> : <p className="gameWin">You win!</p>) : null }
          <p className="guessesRemaining">Guesses Remaining: {guessesRemaining}</p>
          <p className="guesses">Guesses: {guesses.join(", ")}</p>
          <div className="board">
            { !gameOver ? displayWord.map(( letter, i ) => {
              return (
                <p className="wordCharacter" key={i}>
                  {letter}
                </p>
              )
            }) : <p className="answer">{answer}</p> }
          </div>

          { !gameOver ? <GuessForm handleGuess={handleGuess} guessesObj={guessesObj} /> : <button onClick={handleReplay}>Replay</button> }
          
        </div>
    )
}

export default Game;