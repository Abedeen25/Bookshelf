import React, { useState } from 'react';
import Navibar from './components/NavbarComponent';
import SearchComponent from './components/SearchComponent';
import ViewArea from './components/ViewArea';
import { getBooksBySearch } from './Services/BooksAPI';
import PagerComponent from './components/PagerComponent';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [Books, setBooks] = useState([]);
  const [sortTerm, setSortTerm] = useState('relevance');
  const [StartIndex, setStartIndex] = useState(0);
  const [Pagelist, setPagelist] = useState([]);

  const ItemPerPage = 30

  const handleSubmit = async (event) => {
    event.preventDefault();
    await getBooksBySearch(searchTerm, setBooks, sortTerm, ItemPerPage, StartIndex, setPagelist)
  }


  const handleChange = (event) => {
    // console.log(event.target.value)
    setSearchTerm(event.target.value)
  }



  return (
    <div>
      <Navibar />
      <SearchComponent
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        sorter={setSortTerm}
        start={setStartIndex} />
      <ViewArea BookList={Books} />
      {(Books.length != 0) ?
        <PagerComponent
          firstItem={StartIndex}
          firstItemSetter={setStartIndex}
          pages={Pagelist}
          handleSubmit={handleSubmit}
          resultsCount={Books.totalItems}
        /> : <div />}

    </div>

  )
}

export default App;