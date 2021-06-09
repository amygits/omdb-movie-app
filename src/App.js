import logo from './flixLogo.png';
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
      <body className="App-background"><p>
      </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        </p>
        <MovieInfo></MovieInfo>

        </body>
    </div>
  );
}

export default App;
