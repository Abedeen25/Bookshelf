import React from 'react';
import PagerComponent from './PagerComponent';
import BookCard from './BookCard';
import './ViewArea.css';

const ViewArea = (props) => {
    let Books = []
    if (props.BookList.items !== undefined) {
        Books = props.BookList.items
    }
    console.log(Books);
    return (
        <div className="viewport">

            {(props.BookList.length !== 0) ? (
                <div>
                    <div className="viewport">
                        {Books.map((book, i) => {
                            return (
                                <BookCard
                                    info={book.volumeInfo}
                                    BookID={book.id}
                                    key={i}
                                    bookSetter={props.bookSetter} />
                            )
                        })}
                    </div>
                    <PagerComponent
                        firstItem={props.firstItem}
                        firstItemSetter={props.firstItemSetter}
                        pages={props.pages}
                        handleSubmit={props.handleSubmit}
                        resultsCount={props.BookList.totalItems} />
                </div>
            ) : <h2 style={{ margin: 'auto', marginTop: '8em', color: '#bfbfbf' }}>Search the terms you want to see</h2>}

        </div>
    )
}

export default ViewArea;
