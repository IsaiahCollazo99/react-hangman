import React from 'react';
import './../css/Board.css';

const Board = ({visualBoard, word}) => {
    let wordDisplay = "";
    let i = 0;
    while(wordDisplay.length < word.length) {
        if(word[i] === " ") {
            wordDisplay += " ";
        } else {
            wordDisplay += "_";
        }

        i++;
    }

    return (
        <div className="board">
            <img src={visualBoard} alt="Hangman" />
            <p className="word">{wordDisplay}</p>
        </div>
    )
}

export default Board;