import logo from './logo.svg';
import './App.css';
import Header from './Header';
import MovieInfo  from './MovieInfo';
import React from 'react';
import { Helmet } from 'react-helmet';


function App() {
  return (
    <div className="App">
      <Helmet>
        <title>FlixQ</title>
      </Helmet>
      <Header title="FlixQ"></Header>
      <body className="App-background">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Enter a movie title to search:
          <MovieInfo></MovieInfo>
        </p>

        </body>
    </div>
  );
}

export default App;
