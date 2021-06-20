import React, { useState } from 'react';
import './MovieInfo.css';
import Movies from './Movies';

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
        }

        if (choice === '10') {
            setShow20(false);
            setShow10(true);
            setShow30(false);
        }

        if (choice === '30') {
            setShow20(false);
            setShow10(false);
            setShow30(true);
        }
    }

    function handleSubmit(e) {
        setCurrentPage(1);
        e.preventDefault();
        var blankArr = [];

        async function fetchMyAPI() {

           const searchParam = encodeURIComponent(query);
           setQThrow(searchParam);

           const apiUrl1 = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchParam}&type=movie&r=json&page=${currentPage}`;
           const apiUrl2 = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchParam}&type=movie&r=json&page=${nextPage}`;
           const apiUrl3 = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchParam}&type=movie&r=json&page=${nextPage + 1}`;

           let response = await fetch(apiUrl1);
           let response2 = await fetch(apiUrl2);
           let response3 = await fetch(apiUrl3);

           if (response2.ok) {
                setNextExists(true);
            }

           if (show10) {
                response = await response.json();
                console.log(apiUrl1);
                console.log(response.Search);
                const arr = blankArr.concat(response.Search);
                setMovies(arr);
           }
           if (show20 && response2.ok) {
                response = await response.json();
                response2 = await response2.json();
                console.log(apiUrl1);
                console.log(response.Search);
                console.log(apiUrl2);
                console.log(response2.Search);
                const arr = blankArr.concat(response.Search, response2.Search);
                console.log(arr);
                setMovies(arr);
            }
            if (show30 && response3.ok) {
                console.log(apiUrl1);
                console.log(apiUrl2);
                console.log(apiUrl3);
                response = await response.json();
                response2 = await response2.json();
                response3 = await response3.json();
                console.log(response.Search);
                console.log(response2.Search);
                console.log(response3.Search);
                const arr = blankArr.concat(response.Search, response2.Search, response3.Search);
                console.log(arr);
                setMovies(arr);
            }
        }

        fetchMyAPI();
        setShowMovies(true);
        setQuery("");
        setMovies([]);
    }

    function handleNext() {
        var blankArr = [];
        async function fetchMyAPI() {
            const apiUrl1 = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${qThrow}&r=json&type=movie&page=${nextPage}`;
            const apiUrl2 = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${qThrow}&r=json&type=movie&page=${nextPage + 1}`;
            const apiUrl3 = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${qThrow}&r=json&type=movie&page=${nextPage + 2}`;
            const apiUrl0 = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${qThrow}&r=json&type=movie&page=${prevPage}`;

            let response0 = await fetch(apiUrl0);
            let response = await fetch(apiUrl1);
            let response2 = await fetch(apiUrl2);
            let response3 = await fetch(apiUrl3);

            if (response0.ok) {
                setPrevExists(true);
                }

            if (response.ok && show10) {
                response = await response.json();
                console.log(apiUrl1);
                console.log(response.Search);
                const arr = blankArr.concat(response.Search);
                setMovies(arr);
                setPrevPage(currentPage);
                setCurrentPage(nextPage);
                setNextPage(nextPage + 1);
                }
            if (response2.ok && show20) {
                response = await response.json();
                response2 = await response2.json();
                console.log(apiUrl1);
                console.log(response.Search);
                console.log(apiUrl2);
                console.log(response2.Search);
                const arr = blankArr.concat(response.Search, response2.Search);
                console.log(arr);
                setMovies(arr);
                setPrevPage(currentPage);
                setCurrentPage(nextPage + 1);
                setNextPage(nextPage + 2);
                }
            if (show30 && response3.ok) {
                console.log(apiUrl1);
                console.log(apiUrl2);
                console.log(apiUrl3);
                response = await response.json();
                response2 = await response2.json();
                response3 = await response3.json();
                console.log(response.Search);
                console.log(response2.Search);
                console.log(response3.Search);
                const arr = blankArr.concat(response.Search, response2.Search, response3.Search);
                console.log(arr);
                setMovies(arr);
                setPrevPage(currentPage);
                setCurrentPage(nextPage + 2);
                setNextPage(nextPage + 3);
            }
        }
        fetchMyAPI();
        setShowMovies(true);
    }

    function handlePrev() {
            async function fetchMyAPI() {
                const apiUrl = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${qThrow}&r=json&type=movie&page=${prevPage}`;
                console.log(apiUrl);
                let response = await fetch(apiUrl);
                if (response.ok) {
                    response = await response.json();
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