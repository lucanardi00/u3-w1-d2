import React from 'react';
import BookCard from './BookCard';
import booksDataFantasy from '../books/fantasy.json';

function BookGalleryFantasy() {
  return (
    <div className="container">
      <div className="row">
        {booksDataFantasy.map(book => (
          <div className="col-sm-6 col-md-4 col-lg-3" key={book.asin}>
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookGalleryFantasy;