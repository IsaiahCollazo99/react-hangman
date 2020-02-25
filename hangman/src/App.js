import React from 'react';
import Board from './Components/Board';
import Guess from './Components/Guess';
import './App.css';

class App extends React.Component {
  state = {
    word: "flowers",
    visualBoard: ""
  }

  isGuessInvalid = (guess) => {
    
  }

  handleGuess = (event) => {
    let guess = event.target.children[1].value;
    if(this.isGuessInvalid(guess)) {

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
