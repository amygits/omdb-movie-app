import React from 'react';
import './Movies.css';
import { Card } from 'react-bootstrap';

function Movies(props) {
    const movies = props.movies;

    try {
     return(
             <div>
                 {movies.map(movie => {
                     return(
                     <Card style={{ width: '18rem' }}>
                         <Card.Img variant="top" src={movie.Poster} />
                         <Card.Body>
                             <Card.Title>{movie.Title}</Card.Title>
                             <Card.Text>
                                 {movie.Year}
                             </Card.Text>
                         </Card.Body>
                     </Card>)
                 })}
             </div>
         )}

     catch(err) {
        return <div>
            Sorry, your title was too popular and attracted too many results.
            Please try re-typing or narrowing down your search.
        </div>
     }
}

export default Movies;