import React, { useState } from 'react';
import './Movies.css';
import { Card } from 'react-bootstrap';


function Movies(props) {
    const movies = props.movies;
    const [imdbID, setImdbID] = useState("");

    try {
     return(
             <div className ="Movielist">
                 {movies.map(movie => {
                     return(
                     <Card
                        style={{ width: '18rem' }}><Card.Header><Card.Link href="#" onClick={handleLinkClick}>{movie.Title}</Card.Link></Card.Header>
                        <Card.Footer><small className="text-muted">Released: {movie.Year}</small></Card.Footer>
                         <Card.Img variant="top" src={movie.Poster}/><p></p>
                     </Card>)
                 })}
             </div>
         )}
     catch(err) {
        return <div className = "Schbody">
                    Sorry, your title was too popular and attracted too many results.
                     Please try re-typing or narrowing down your search.
        </div>
     }

   function handleLinkClick(e) {
    e.preventDefault();
    console.log("re-direct to be implemented");
    }
}

export default Movies;
