import React, { useState } from 'react';
import Navibar from './components/NavbarComponent';
import SearchComponent from './components/SearchComponent';
import ViewArea from './components/ViewArea';
import { getBooksBySearch } from './Services/BooksAPI';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [Books, setBooks] = useState([]);
  const [sortTerm, setSortTerm] = useState('relevance');


  const handleSubmit = async (event) => {
    event.preventDefault();
    await getBooksBySearch(searchTerm, setBooks, sortTerm);
  }


  const handleChange = (event) => {
    // console.log(event.target.value)
    setSearchTerm(event.target.value)
  }

  const orderChange = (event) => {
    setSearchTerm(event.target.value)
  }



  return (
    <div>
      <Navibar />
      <SearchComponent handleChange={handleChange} handleSubmit={handleSubmit} />
      <ViewArea BookList={Books} />
    </div>

  )
}

export default App;