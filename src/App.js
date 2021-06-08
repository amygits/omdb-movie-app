import logo from './logo.svg';
import './App.css';
import Header from './Header';
import ReactDom from 'react-dom';
import MovieInfo  from './MovieInfo';

function App() {
  return (
    <div className="App">
      <Header title="Movie Search"></Header>
      <body className="App-background">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Enter a movie title to search:
          <MovieInfo></MovieInfo>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </body>
    </div>
  );
}

export default App;
