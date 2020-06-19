import React, { useState, useEffect } from 'react';
import dictionary from './util/dictionary';
import GuessForm from './components/GuessForm';
import './App.css';

const App = () => {
  const [ answer, setAnswer ] = useState("");
  const [ displayWord, setDisplayWord ] = useState([]);
  const [ guessesRemaining, setGuessesRemaining ] = useState(6);

  const getNewWord = () => {
    let newWord = dictionary[Math.floor(Math.random() * dictionary.length)];
    setAnswer(newWord);

    let underscores = [];
    for(let char of newWord) {
      if(char === " ") {
        underscores.push(" ");
      } else {
        underscores.push("_");
      }
    }
    setDisplayWord(underscores);
  }

  useEffect(() => {
    getNewWord();
  }, [])

  const handleGuess = ( guess ) => {
    let guessFound = false;
    for(let i = 0; i < answer.length; i ++) {
      if(answer[i] === guess) {
        let newDisplayWord = [...displayWord];
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
    <div className="App">
      {answer}
      <p className="guessesRemaining">Guesses Remaining: {guessesRemaining}</p>
      <div className="board">
        {displayWord.map(( letter, i ) => {
          return (
            <p className="wordCharacter" key={i}>
              {letter}
            </p>
          )
        })}
      </div>

      <GuessForm handleGuess={handleGuess} />
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
