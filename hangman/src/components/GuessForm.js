import React, { useState } from 'react';
import moves from '../util/moves';

const GuessForm = ({ handleGuess }) => {
    const [ guess, setGuess ] = useState("");
    const [ error, setError ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
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
                <input type="text" maxLength={1} value={guess} onChange={handleChange}/>
            </form>
        </>
    )
}

export default GuessForm;