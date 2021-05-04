import React from "react";
import { useDispatch } from "react-redux";
import { bookModalShow } from "../../redux/bookModal/actions";
import defaultCover from "../../img/book-icon.svg";
import "./BookItem.css";

function BookItem({ book }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(bookModalShow(book));
  };

  return (
    <li className="book-item book-list__book" onClick={handleClick}>
      <div className="book-item__icon">
        <img
          className="book-item__image"
          src={
            book.cover_i
              ? `http://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg`
              : defaultCover
          }
          alt=""
        />
      </div>
      <span className="book-item__title">
        "
        {book.title.length <= 24
          ? book.title
          : book.title.replace(
              book.title.slice(17, book.title.length - 4),
              "..."
            )}
        "
      </span>
      {book.author_name && (
        <span className="book-item__author">
          {book.author_name[0].length <= 24
            ? book.author_name[0]
            : book.author_name[0].replace(
                book.author_name[0].slice(17, book.author_name[0].length - 4),
                "..."
              )}
        </span>
      )}
    </li>
  );
}

export default BookItem;
