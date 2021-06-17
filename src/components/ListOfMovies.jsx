import React, { useState, useEffect } from 'react';
import axios from 'axios';
const ListOfMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(async () => {
    const result = await axios(
      'https://content.viaplay.se/pc-se/serier/samtliga'
    );
    setMovies(result.data);
  }, []);

  return (
    <div>
      <h1 data-cy='list-of-movies'>List of Movies</h1>
      <div>
        {movies.map((movie, index) => (
          <li key={index}>{movie.title}</li>
        ))}
      </div>
    </div>
  );
};

export default ListOfMovies;
