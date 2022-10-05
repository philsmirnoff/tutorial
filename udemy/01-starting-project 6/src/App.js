import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

    // fetch rturns us a promise that allows us to react to response
    // we will add then. to define the function that will be called
   // once the data is fetched and we can add catch to handle errors
   // this response argument here is an object with data about the response and we use json() to transform the data into a js object
   // once the data treansformation is over we get the data as an argument
      // and wwe can access to the array through the results property and store it in the movies state so we can update later

      // old code
      // function fetchMovieHandler() {
      // fetch('https://swapi.dev/api/films/')
      // .then(response => {
      //   return response.json();
      // })
      // .then(data => {

      // new code
      async function fetchMovieHandler() {
        const response = await fetch('https://swapi.dev/api/films/');
        const data = await response.json();
        const transformedMovies = data.results.map(movieData => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date
          };
        });
        // setMovies(data.results);
        setMovies(transformedMovies);
      };


  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
  }

export default App;
