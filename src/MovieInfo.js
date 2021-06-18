import React, { useState } from 'react';
import './MovieInfo.css';
import Movies from './Movies';
import Dropdown from 'react-bootstrap/Dropdown';



function MovieInfo() {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("");
    const [qThrow, setQThrow] = useState("");
    const [showMovies, setShowMovies] = useState(false);
    const [nextExists, setNextExists] = useState(false);
    const [prevExists, setPrevExists] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [nextPage, setNextPage] = useState(currentPage + 1);
    const [prevPage, setPrevPage] = useState(1);
    const [show10, setShow10] = useState(true);
    const [show20, setShow20] = useState(false);
    const [show30, setShow30] = useState(false);

    function handleFilter() {
        var getChoice = document.getElementById("filterList");
        var choice = getChoice.options[getChoice.selectedIndex].text;
        console.log(choice);
        if (choice === '20') {
            setShow20(true);
            setShow10(false);
            setShow30(false);
            console.log(show30);
        }
        if (choice === '10') {
            setShow20(false);
            setShow10(true);
            setShow30(false);
            console.log(show30);
        }
        if (choice === '30') {
            setShow20(false);
            setShow10(false);
            setShow30(true);
            console.log(show30);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        async function fetchMyAPI() {
           setCurrentPage(1);
           const searchParam = encodeURIComponent(query);
           setQThrow(searchParam);
           const apiUrl = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchParam}&type=movie&r=json&page=${currentPage}`;
           console.log(apiUrl);
           let response = await fetch(apiUrl);
           if (show10) {
                response = await response.json();
                console.log(response.Search);
                setMovies(response.Search);
                }
           const apiUrl2 = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchParam}&type=movie&r=json&page=${nextPage}`;
           let response2 = await fetch(apiUrl2);
           if (response2.ok) {
            setNextExists(true);
            response2 = await response2.json();
            if (show20) {
                const arr = movies.concat(response2.Search);
                console.log(arr);
                setMovies(arr);
                setCurrentPage(currentPage + 2);
                setNextPage(nextPage + 2);
            }
           }
        }

        fetchMyAPI();
        setShowMovies(true);
        setQuery("");

    }

    function handleNext() {
        async function fetchMyAPI() {
            const apiUrl = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${qThrow}&r=json&type=movie&page=${nextPage}`;
            console.log(apiUrl);
            let response = await fetch(apiUrl);
            if (response.ok) {
                response = await response.json();
                setShowMovies(true);
                console.log(response.Search);
                setMovies(response.Search);
                const apiUrl2 = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${qThrow}&r=json&type=movie&page=${prevPage}`;
                           let response2 = await fetch(apiUrl2);
                           if (response2.ok) {
                                setPrevExists(true);
                                if (show20) {
                                    const arr = movies.concat(response2.Search);
                                    console.log(arr);
                                    setMovies(arr);
                                    setCurrentPage(currentPage + 2);
                                    setNextPage(nextPage + 2);
                                }
                           }
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
                const apiUrl = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${qThrow}&r=json&type=movie&page=${prevPage}`;
                console.log(apiUrl);
                let response = await fetch(apiUrl);
                if (response.ok) {
                    response = await response.json();
                    setShowMovies(true);
                    console.log(response.Search);
                    setMovies(response.Search);
                    setNextPage(prevPage + 1);
                    setCurrentPage(prevPage);
                    if (prevPage - 1 > 0) setPrevPage(prevPage - 1);
                    if (prevPage === 1) setPrevExists(false);
                    }
            }
            fetchMyAPI();
            setShowMovies(true);
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
            <form>
                Show
                <select id = "filterList" onChange = {() => handleFilter()}>
                <option>10</option>
                <option>20</option>
                <option>30</option>
                </select> results per page
            </form></p><p>
            { prevExists ? <button onClick = { () => handlePrev()}>Prev</button> : <></> }
            { nextExists ? <button onClick = { () => handleNext()}>Next</button> : <></>}
            </p>
            { showMovies  ? <Movies movies = {movies}></Movies> : <></>}
            { prevExists? <button onClick = { () => handlePrev()}>Prev</button> : <></> }
            { nextExists ? <button onClick = { () => handleNext()}>Next</button>  : <></>}
            <p></p>
             </div>
    )
}

export default MovieInfo;