import React, { useState } from 'react';
import '../css/GameSetup.css';

const GameSetup = ({ handleSetup }) => {
    const [ category, setCategory ] = useState("choose");
    const [ difficulty, setDifficulty ] = useState("choose");
    const [ error, setError ] = useState("");

    const handleChange = (e) => {
        if(e.target.className === "categorySelect") {
            setCategory(e.target.value)
        } else {
            setDifficulty(e.target.value);
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(category !== "choose" && difficulty !== "choose") {
            setError("");
            handleSetup({ category, difficulty });
        } else {
            setError("Please select both a 'Category' and 'Difficulty'");
        }
    }
    
    return (
        <form className="gameSetup" onSubmit={handleSubmit}>
            { error ? <p className="error">{error}</p> : null }
            <label htmlFor="categorySelect">Select a category: </label>
            <select onChange={handleChange} className="categorySelect" required defaultValue="choose">
                <option value="choose" disabled>Choose a Category</option>
                <option value="movies">Movies</option>
                <option value="games">Video Games</option>
                <option value="books">Books</option>
                <option value="tvShows">TV Shows</option>
                <option value="musicArtists">Music Artists</option>
                <option value="misc">Misc</option>
            </select>

            <label htmlFor="difficultySelect">Select a difficulty: </label>
            <select onChange={handleChange} className="difficultySelect" required defaultValue="choose">
                <option value="choose" disabled>Choose a Difficulty</option>
                <option value="veryHard">Very Hard</option>
                <option value="hard">Hard</option>
                <option value="medium">Medium</option>
                <option value="easy">Easy</option>
            </select>

            <input type="submit" value="Start Game" />
        </form>
    )
}

export default GameSetup