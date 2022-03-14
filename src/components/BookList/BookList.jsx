import React from "react";
import { useSelector } from "react-redux";
import BookItem from "../BookItem/BookItem";
import Paginator from "../Paginator/Paginator";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import "./BookList.css";

function BookList(props) {
  const { items, loading, error, page } = useSelector(
    (state) => state.bookList
  );

  const count = (page) => {
    return 15 * page - 15;
  };

  return (
    <div className="book-container">
      {loading && <Loader />}
      {error && <Error />}
      {items.length > 0 && (
        <>
          <ul className="book-list">
            {items.slice(count(page), count(page) + 15).map((el) => (
              <BookItem key={el.key} book={el} />
            ))}
          </ul>
          <Paginator count={Math.ceil(items.length / 15)} />
        </>
      )}
    </div>
  );
}

export default BookList;
