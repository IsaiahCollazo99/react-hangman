import React from 'react';
import Board from './Components/Board';
import Guess from './Components/Guess';
import moves from './assets/moves';
import './App.css';

class App extends React.Component {
  state = {
    word: "flowers",
    visualBoard: "",
    guessesRemaining: 6,
    guessesMade: 0,
    guesses: []
  }
  
  isGuessInvalid = (guess) => {
    return !guess || guess.length > 1 || !moves[guess];
  }

  handleGuess = (event) => {
    let response = event.target.children[0];
    let input = event.target.children[2];
    let guess = input.value;
    if(this.isGuessInvalid(guess)) {
      response.innerText = "Invalid Guess";
      response.style.color = "red";
      response.style.fontWeight = "bold";
    } else {
      let word = this.state;
      for(let i = 0; i < word.length; i++) {
        let letter = word[i];
        if(guess === letter) {

        }
      }
    }
  }
  
  render = () => {
    return (
      <div className="App">
        <Board word={this.state.word} visualBoard={this.state.visualBoard}/>
        <Guess handleSubmit={this.handleGuess}/>
      </div>
    );
  }
}

export default App;
