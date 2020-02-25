import React from 'react';
import Board from './Components/Board';
import './App.css';

class App extends React.Component {
  state = {
    word: "flowers",
    visualBoard: ""
  }
  
  render = () => {
    return (
      <div className="App">
        <Board word={this.state.word} visualBoard={this.state.visualBoard}/>
      </div>
    );
  }
}

export default App;
