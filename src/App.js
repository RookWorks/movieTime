import React, { useState, useEffect } from 'react';

import './App.css';
import SearchIcon from './search.svg';
// import MovieCard from "";


const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=6f4b8a6e";

const App = () => {
  const [searchTerm, setSearchTerm] = useState ("");
  const [movie, setMovies] = useState([]);
  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch (`${API_URL}&s=${title}`);
    const data = await response.json();
    
    setMovies(data.Search);
  };

  return (
    <div className="app">
        <h1>Movie Time</h1>

        <div className="search">
          <input value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder= "Search our catelogue..."/>
          <img src={SearchIcon}
              alt="search"
              onClick={() => searchMovies(searchTerm)}/>
        </div>
        
    </div>
  );
}



// import Cam from './Cam';
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello</h1>
//       <Cam />
//       <Cam />
//     </div>
//   );
// }

export default App;
