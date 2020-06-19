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
  
  return (
      <div className="App">
        { answer ? 
          <Game gameOver={gameOver} isGameOver={isGameOver} answer={answer} /> :
          <GameSetup handleSetup={getNewWord} />
        }
      </div>
  )
}

export default App;

// class App extends React.Component {
//   state = {
//     word: "flowers",
//     hiddenWord: "",
//     visualBoard: "",
//     guessesRemaining: 6,
//     guessesMade: 0,
//     guesses: []
//   }
  
//   isGuessInvalid = (guess) => {
//     return !guess || guess.length > 1 || !moves[guess];
//   }

//   handleGuess = (event) => {
//     let response = event.target.children[0];
//     let input = event.target.children[2];
//     let guess = input.value;
//     if(this.isGuessInvalid(guess)) {
//       response.innerText = "Invalid Guess";
//       response.style.color = "red";
//       response.style.fontWeight = "bold";
//     } else {
//       let word = this.state;
//       for(let i = 0; i < word.length; i++) {
//         let letter = word[i];
//         if(guess === letter) {

//         }
//       }
//     }
//   }
  
//   render = () => {
//     return (
//       <div className="App">
//         <Board word={this.state.word} visualBoard={this.state.visualBoard}/>
//         <Guess handleSubmit={this.handleGuess}/>
//       </div>
//     );
//   }
// }

// export default App;
