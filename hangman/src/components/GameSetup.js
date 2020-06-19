import React, { useState } from 'react';

const GameSetup = ({ handleSetup }) => {
    const [ category, setCategory ] = useState("choose");
    const [ difficulty, setDifficulty ] = useState("choose");
    const [ error, setError ] = useState("");

    const handleChange = (e) => {
        debugger;
        if(e.target.className === "categorySelect") {
            setCategory(e.target.value)
        } else {
            setDifficulty(e.target.value);
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        debugger;
        if(category !== "choose" && difficulty !== "choose") {
            setError("");
            handleSetup();
        } else {
            setError("Please select both a 'Category' and 'Difficulty'");
        }
    }
    
    return (
        <form className="gameSetup" onSubmit={handleSubmit}>
            { error ? <p className="error">{error}</p> : null }
            <select onChange={handleChange} className="categorySelect" required>
                <option value="choose" selected disabled>Choose a Category</option>
                <option value="movies">Movies</option>
                <option value="books">Books</option>
                <option value="tvShows">TV Shows</option>
                <option value="musicArtists">Music Artists</option>
                <option value="misc">Misc</option>
            </select>

            <select onChange={handleChange} className="difficultySelect" required>
                <option value="choose" selected disabled>Choose a Difficulty</option>
                <option value="hard">Hard</option>
                <option value="medium">Medium</option>
                <option value="easy">Easy</option>
            </select>

            <input type="submit" value="Start Game" />
        </form>
    )
}

export default GameSetup