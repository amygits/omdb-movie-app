import React, { useState } from 'react';
import './MovieInfo.css';
import Movies from './Movies';
import Pagination from './Pagination';

function MovieInfo() {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("");
    const [showMovies, setShowMovies] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        async function fetchMyAPI() {
           const searchParam = encodeURIComponent(query);
           const apiUrl = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchParam}&r=json`;
           console.log(apiUrl);
           let response = await fetch(apiUrl);
           response = await response.json();
           console.log(response.Search);
           setMovies(response.Search);
        }
           fetchMyAPI();
           setShowMovies(true);
           setQuery("");
           }

    return(
        <div className="movieSearch">
            <form onSubmit={handleSubmit}>
                <input
                    id="queryInput"
                    value={query}
                    type="text"
                    onChange={e => setQuery(e.target.value)}/>
                <button className="search">Search</button>
            </form> <p></p>
            { showMovies ? <Movies movies = {movies}></Movies> : <></>}
             </div>
             )
}

export default MovieInfo;

