import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';

// Data
import SavedList from './Movies/SavedList';

// Components
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
        <Link className="movieListButton" to="/">MovieList</Link>
        <div >
            <Route exact path="/">
                <MovieList />
            </Route>
        </div>
      <Route exact path="/MovieList/:id">
        <Movie />
      </Route>
    </div>
  );
};

export default App;
