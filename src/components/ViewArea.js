import React from 'react';

import BookCard from './BookCard';
import './ViewArea.css';

const ViewArea = (props) => {
    let Books = props.BookList.items
    console.log(Books);
    return (
        <div className="viewport">

            {(props.BookList.length != 0) ? (Books.map((book, i) => {
                return (
                    <BookCard info={book.volumeInfo} BookID={book.id} />
                )
            })) : <h2 style={{ margin: '8em', color: 'gray' }}>Search the terms you want to see</h2>}

        </div>
    )
}

export default ViewArea;
