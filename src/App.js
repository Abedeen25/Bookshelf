import React, { useState } from 'react';
import Navibar from './components/NavbarComponent';
import SearchComponent from './components/SearchComponent';
import ViewArea from './components/ViewArea';
import { getBooksBySearch } from './Services/BooksAPI';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import DetailsPage from './Pages/DetailsPage';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [Books, setBooks] = useState([]);
  const [sortTerm, setSortTerm] = useState('relevance');
  const [StartIndex, setStartIndex] = useState(0);
  const [Pagelist, setPagelist] = useState([]);
  const [CheckBook, setCheckBook] = useState([]);

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
      <BrowserRouter>
        <Navibar />
        <div>
          <Route path="/" exact>
            <SearchComponent
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              sorter={setSortTerm}
              start={setStartIndex} />

            <ViewArea
              BookList={Books}
              handleSubmit={handleSubmit}
              pages={Pagelist}
              firstItemSetter={setStartIndex}
              firstItem={StartIndex}
              bookSetter={setCheckBook} />
          </Route>

          <Route path='/book_details' exact>
            <DetailsPage info={CheckBook} />
          </Route>
        </div>
      </BrowserRouter>



    </div>

  )
}

export default App;