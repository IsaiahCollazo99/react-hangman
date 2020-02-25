import React from 'react';

class Board extends React.Component {
    render = () => {
        const {visualBoard, word} = this.props;
        let wordDisplay = "";
        let i = 0;
        while(wordDisplay.length < word.length) {
            if(word[i] === " ") {
                wordDisplay += " ";
            } else {
                wordDisplay += "_";
            }
            
            i++
        }
        return (
            <div>
                <img src={visualBoard} alt="Hangman" />
                {word}
            </div>
        )
    }
}

export default Board;