import React from 'react';

class Board extends React.Component {
    render = () => {
        const {visualBoard, word} = this.props;
        let wordDisplay = "";
        let i = 0;
        while((wordDisplay.length / 2) < word.length) {
            if(word[i] === " ") {
                wordDisplay += " ";
            } else {
                wordDisplay += "_ ";
            }
            
            i++
        }

        return (
            <div>
                <img src={visualBoard} alt="Hangman" />
                {wordDisplay}
            </div>
        )
    }
}

export default Board;