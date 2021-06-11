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
                     <Card
                        bg = 'info'
                        style={{ width: '18rem' }}>
                         <Card.Img variant="top" src={movie.Poster}/>
                         <Card.Header>{movie.Title}</Card.Header>
                         <Card.Body><Card.Text>Release year: {movie.Year}</Card.Text>
                         </Card.Body>
                     </Card>)
                 })}
             </div>
         )}
     catch(err) {
        return <div>
                <schbody>
                    Sorry, your title was too popular and attracted too many results.
                     Please try re-typing or narrowing down your search. </schbody>
        </div>
     }
}

export default Movies;