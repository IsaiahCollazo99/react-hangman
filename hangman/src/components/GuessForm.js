import React, { useState } from 'react';
import moves from '../util/moves';

const GuessForm = ({ handleGuess, guessesObj }) => {
    const [ guess, setGuess ] = useState("");
    const [ error, setError ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(guessesObj[guess.toLowerCase()]) {
            setError("You already guessed that letter!");
            return;
        } 
        
        if(moves[guess.toLowerCase()]) {
            handleGuess(guess.toLowerCase());
            setError("");
            setGuess("");
        } else {
            setError("Invalid guess");
        }
    }
    
    const handleChange = (e) => {
        setGuess(e.target.value);
    }
    
    return (
        <>
            { error ? <p className="error">{error}</p> : null }
            <form onSubmit={handleSubmit}>
                <label>
                    Guess: 
                    <input type="text" maxLength={1} value={guess} onChange={handleChange}/>
                </label>
                <input type="submit" value="Guess"/>
            </form>
        </>
    )
}

export default GuessForm;