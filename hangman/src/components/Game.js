import React, { useState, useEffect } from 'react';
import GuessForm from './GuessForm';
import '../css/Game.css';
import visualHangman from '../util/visualHangman';

const Game = ({ gameOver, isGameOver, answer, returnToSetup, category, difficulty }) => {
    const [ displayWord, setDisplayWord ] = useState([]);
    const [ guessesRemaining, setGuessesRemaining ] = useState(6);
    const [ guesses, setGuesses ] = useState([]);
    const [ guessesObj, setGuessesObj ] = useState({});
    const [ guessesStyle, setGuessesStyle ] = useState({});

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
      if(guessesRemaining > 4) {
        setGuessesStyle({ "color": 'green' })
      } else if (guessesRemaining > 2) {
        setGuessesStyle({ "color": 'yellow' })
      } else {
        setGuessesStyle({ "color": 'red' })
      }
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

    const getCategoryDisplay = () => {
      if(category === "games") return "Video Games"
      else if(category === "tvShows") return "TV Shows"
      else if(category === "musicArtists") return "Music Artists"
      else if(category === "misc") return "Miscellaneous"
      else return category.slice(0, 1).toUpperCase() + category.slice(1);
    }

    const getDifficultyDisplay = () => {
      if(difficulty === "veryHard") return "Very Hard"
      else return difficulty.slice(0, 1).toUpperCase() + difficulty.slice(1);
    }

    const getHangmanDisplay = () => {
      return visualHangman[guessesRemaining];
    }

    const categoryDisplay = getCategoryDisplay();
    const difficultyDisplay = getDifficultyDisplay();
    const hangmanDisplay = getHangmanDisplay();
    
    return (
        <div className="game">
          <img src={hangmanDisplay} alt={`${guessesRemaining} board`} className="hangmanDisplay" />
          { gameOver ? (!guessesRemaining ? <p className="gameLose">Out of Moves!</p> : <p className="gameWin">You win!</p>) : null }
          <p className="category"><span>Category: </span>{categoryDisplay}</p>
          <p className="difficulty"><span>Difficulty: </span>{difficultyDisplay}</p>
          <p className="guessesRemaining"><span>Guesses Remaining:</span> <span style={guessesStyle}>{guessesRemaining}</span></p>
          <p className="guesses"><span>Guesses:</span> {guesses.join(", ")}</p>
          <div className="board">
            { !gameOver ? displayWord.map(( letter, i ) => {
              return (
                <p className="wordCharacter" key={i}>
                  {letter}
                </p>
              )
            }) : <p className="answer"><span>Answer: </span>{answer}</p> }
          </div>

          { !gameOver ? <GuessForm handleGuess={handleGuess} guessesObj={guessesObj} /> : <button onClick={handleReplay}>Replay</button> }
          
        </div>
    )
}

export default Game;