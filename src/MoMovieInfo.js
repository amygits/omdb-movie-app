import React, { useState } from 'react';
import './MoMovieInfo.css';
import { Card } from 'react-bootstrap';


function MoMovieInfo(props) {
    const momovieinfo = props.momovieinfo;

    try {
     return(
             <div className ="MovieSummary">
                 {momovieinfo.map(momovieinfo => {
                     return(
                     <Card
                        bg = 'dark'
                        style={{ width: '18rem' }}><Card.Header>{momovieinfo.Title}</Card.Header>
                        <Card.Img variant="top" src={movie.Poster}/>
                        <Card.Body><p>Summary: {momovieinfo.Plot}</p></Card.Body>
                        <Card.Footer><small className="text-muted">
                        <p>Directed by {momovieinfo.Director}</p>
                        Released: {momovieinfo.Year}</small></Card.Footer>
                        <p></p>
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

}

export default MoMovieInfo;
