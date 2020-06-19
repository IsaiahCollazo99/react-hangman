import React, { useState, useEffect } from 'react';
import GuessForm from './GuessForm';

const Game = ({ gameOver, isGameOver, answer }) => {
    const [ displayWord, setDisplayWord ] = useState([]);
    const [ guessesRemaining, setGuessesRemaining ] = useState(6);

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
        if(answer[i] === guess) {
          newDisplayWord[i] = guess;
          setDisplayWord(newDisplayWord);
          guessFound = true;
        }
      }
  
      if(!guessFound) {
        setGuessesRemaining(guessesRemaining - 1);
      }
    }
  
    // useEffect(() => {
    //   // change board
    //   return () => {
    //     setWord("");
    //   }
    // }, [word])
    
    return (
        <div className="game">
          { gameOver ? (!guessesRemaining ? <p className="gameLose">Out of Moves!</p> : <p className="gameWin">You win!</p>) : null }
          <p className="guessesRemaining">Guesses Remaining: {guessesRemaining}</p>
          <div className="board">
            { !gameOver ? displayWord.map(( letter, i ) => {
              return (
                <p className="wordCharacter" key={i}>
                  {letter}
                </p>
              )
            }) : <p className="answer">{answer}</p> }
          </div>
  
          { !gameOver ? <GuessForm handleGuess={handleGuess} /> : null }
        </div>
    )
}

export default Game;