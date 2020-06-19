import React, { useState, useEffect } from 'react';
import dictionary from './util/dictionary';
// import Board from './Components/Board';
// import Guess from './Components/Guess';
// import moves from './assets/moves';
import './App.css';

const App = () => {
  const [ word, setWord ] = useState("");
  const [ hiddenWord, setHiddenWord ] = useState("");

  const getNewWord = () => {
    let newWord = dictionary[Math.floor(Math.random() * dictionary.length)];
    setWord(newWord);
    let underscores = [];
    for(let char of newWord) {
      underscores.push("_");
    }
    setHiddenWord(underscores.map(letter => {
      return (
        <p className="wordCharacter">
          {letter}
        </p>
      )
    }));
  }

  useEffect(() => {
    getNewWord();
  }, [])

  // useEffect(() => {
  //   // change board
  //   return () => {
  //     setWord("");
  //   }
  // }, [word])
  
  return (
    <div className="App">
      {word}
      <div className="board">
        {hiddenWord}
      </div>
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
