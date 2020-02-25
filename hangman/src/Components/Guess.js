import React from 'react';

const Guess = ({handleSubmit}) => {
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(e);
            }}>
                <label htmlFor="guessInput">Input a Guess: </label>
                <input type="text" placeholder="Input a guess" name="guessInput"/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Guess;