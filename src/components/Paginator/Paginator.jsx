import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { selectPage } from "../../redux/booksList/actions";

import "./Paginator.css";

function Paginator({ count }) {
  const { page } = useSelector((state) => state.booksList);
  const dispatch = useDispatch();

  const generate = (count) => {
    const pages = [];
    for (let i = 1; i <= count; i++) {
      pages.push(i);
    }
    return pages;
  };

  const select = (page) => {
    dispatch(selectPage(page));
  };

  const selectBefore = () => {
    if (page > 1) {
      dispatch(selectPage(page - 1));
    }
  };

  const selectAfter = () => {
    if (page < count) {
      dispatch(selectPage(page + 1));
    }
  };

  return (
    <div className="paginator">
      <div className="paginator__list">
        {generate(count).map((el) => (
          <button
            className={`paginator__item ${page === el ? "paginator__item--active" : ""}`}
            key={el}
            onClick={() => select(el)}
          >
            {el}
          </button>
        ))}
      </div>
      <div className="paginator__actions">
        <button
          className="paginator__action paginator__action--before"
          onClick={selectBefore}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 1024 1024" version="1.1">
            <path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" />
          </svg>
        </button>
        <button
          className="paginator__action paginator__action--after"
          onClick={selectAfter}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 1024 1024" version="1.1">
            <path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

Paginator.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Paginator;
