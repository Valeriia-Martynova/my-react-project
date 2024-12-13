import { useState } from 'react'

import './App.css'

import BookList from './Booklist.jsx'
import favouriteBooks from './favouritbooks.jsx';

const App = () => {
  return (
    <>
	  <h1>Books of the week</h1>
      <BookList books={favouriteBooks} />
    </>
  );
};

export default App