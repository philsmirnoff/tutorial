import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
      const fetchMovieHandler = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
        const response = await fetch('https://swapi.dev/api/films/');
        if(!response.ok) {
          throw new Error('Something went wrong!');
        }
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

      } catch (error) {
        setError(error.message);
      };
      setIsLoading(false);
    }, []);
    // we can add an empty array as a second argument to useEffect to make sure that it runs only once
    // if we add a variable to the array, it will run every time that variable changes
    // if we add a function to the array, it will run every time that function changes
    useEffect(() => {
      fetchMovieHandler();
    }, [fetchMovieHandler]);


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
        {/* // if we are not loading we want to render the movies list */}
        {!isLoading &&movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>Found no movies.</p>}
        {/* // if we are loading we want to render the loading message */}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>}

      </section>
    </React.Fragment>
  );
  }

export default App;
