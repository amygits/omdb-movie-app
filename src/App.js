import logo from './flixLogo.png';
import headerLogo from './headerLogo.png';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import MovieInfo  from './MovieInfo';
import React from 'react';
import { Helmet } from 'react-helmet';


function App() {
  return (
    <div className="App">
      <Helmet><title>FlixQ</title>
      </Helmet>
      <Header title =
            <a href = "/">
                <img src={headerLogo} className="Top-Logo" alt="header logo"/>
            </a> >
        </Header>
      <body className="App-background"><a href = "/ ">
        <img src={logo} className="App-logo" alt="logo" /></a>
        <p>
            Try searching for a movie!
        </p>
            <MovieInfo></MovieInfo>
      </body>
        <Footer title = "Created by Amy Ma for the Capital Group's consideration">
        </Footer>
    </div>
  );
}

export default App;
