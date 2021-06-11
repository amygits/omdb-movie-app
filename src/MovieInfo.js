import React, { useState } from 'react';
import './MovieInfo.css';
import Movies from './Movies';

function MovieInfo() {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("");
    const [qThrow, setQThrow] = useState("");
    const [showMovies, setShowMovies] = useState(false);
    const [prev, setPrev] = useState(false);
    const [next, setNext] = useState(false);
    const nextExists = true;
    const prevExists = true;
    const [currentPage, setCurrentPage] = useState(1);
    const [nextPage, setNextPage] = useState(currentPage + 1);
    const [prevPage, setPrevPage] = useState(1);

    function handleSubmit(e) {
        setCurrentPage(1);
        e.preventDefault();

        async function fetchMyAPI() {
           const searchParam = encodeURIComponent(query);
           setQThrow(searchParam);
           const apiUrl = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchParam}&r=json&page=${currentPage}`;
           console.log(apiUrl);
           let response = await fetch(apiUrl);
           response = await response.json();
           console.log(response.Search);
           setMovies(response.Search);
           const apiUrl2 = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchParam}&r=json&page=${nextPage}`;
           let response2 = await fetch(apiUrl2);
           if (response.ok) {
            nextExists(true);
            console.log(nextExists);
           }
        }
           fetchMyAPI();
           setShowMovies(true);
           setQuery("");
    }

    function handleNext() {
        async function fetchMyAPI() {
            const apiUrl = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${qThrow}&r=json&page=${nextPage}`;
            console.log(apiUrl);
            let response = await fetch(apiUrl);
            if (response.ok) {
                response = await response.json();
                setNext(true);
                setShowMovies(true);
                console.log(response.Search);
                setMovies(response.Search);
                }
        }
        fetchMyAPI();
        setShowMovies(true);
        setPrevPage(currentPage);
        setCurrentPage(nextPage);
        setNextPage(nextPage + 1);

    }
        function handlePrev() {
            async function fetchMyAPI() {
                const apiUrl = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${qThrow}&r=json&page=${prevPage}`;
                console.log(apiUrl);
                let response = await fetch(apiUrl);
                if (response.ok) {
                    response = await response.json();
                    setNext(true);
                    setShowMovies(true);
                    console.log(response.Search);
                    setMovies(response.Search);
                    }
            }
            fetchMyAPI();
            setShowMovies(true);

            if (prevPage - 1 > 0) setPrevPage(prevPage - 1);
            setCurrentPage(prevPage);
            setNextPage(currentPage + 1);
        }

    return(
        <div className="movieSearch">
            <form onSubmit={handleSubmit}>
                <input
                    id="queryInput"
                    value={query}
                    type="text"
                    onChange={e => setQuery(e.target.value) }/>
                <button className="search">Search</button>
            </form> <p>
            { prevExists? <button onClick = { () => handlePrev()}>Prev</button> : <></> }
            { nextExists ? <button onClick = { () => handleNext()}>Next</button>  : <></>}
            </p>
            { showMovies  ? <Movies movies = {movies}></Movies> : <></>}
            { prevExists? <button onClick = { () => handlePrev()}>Prev</button> : <></> }
            { nextExists ? <button onClick = { () => handleNext()}>Next</button>  : <></>}
            <p></p>

             </div>
             )
}

export default MovieInfo;

