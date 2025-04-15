import React from "react";
import { useSelector } from "react-redux";
import BooksItem from "../BooksItem/BooksItem";
import Paginator from "../Paginator/Paginator";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import "./BooksList.css";

function BooksList(props) {
  const { items, loading, error, page } = useSelector(
    (state) => state.booksList
  );

  const count = (page) => {
    return 15 * page - 15;
  };

  return (
    <div className="books">
      {loading && <Loader />}
      {error && <Error />}
      {items.length > 0 && (
        <>
          <ul className="books__list">
            {items.slice(count(page), count(page) + 15).map((el) => (
              <BooksItem key={el.key} book={el} />
            ))}
          </ul>
          <Paginator count={Math.ceil(items.length / 15)} />
        </>
      )}
    </div>
  );
}

export default BooksList;
