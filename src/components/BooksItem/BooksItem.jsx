import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { bookModalShow } from "../../redux/bookModal/actions";
import "./BooksItem.css";

function BooksItem({ book }) {
  const dispatch = useDispatch();

  const selectBook = () => {
    dispatch(bookModalShow(book));
  };

  return (
    <li className="books__item" onClick={selectBook}>
      <div className="books__item-icon">
        {book.cover_i ?
          (<img src={`http://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg`} alt="" />)
        : ''}
      </div>
      <div className="books__item-content">
        <div className="books__item-title">{book.title}</div>
        {book.author_name && (<div className="books__item-author">{book.author_name[0]}</div>)}
      </div>
    </li>
  );
}

BooksItem.propTypes = {
  book: PropTypes.shape({
    cover_i: PropTypes.number,
    title: PropTypes.string.isRequired,
    author_name: PropTypes.array,
  }),
};

export default BooksItem;
