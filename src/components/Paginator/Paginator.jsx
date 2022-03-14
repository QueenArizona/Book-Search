import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { selectPage } from "../../redux/bookList/actions";

import "./Paginator.css";

function Paginator({ count }) {
  const { page } = useSelector((state) => state.bookList);
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
      <div className="pages">
        {generate(count).map((el) => (
          <button
            className={`page ${page === el ? "page--active" : ""}`}
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
          ⟪
        </button>
        <button
          className="paginator__action paginator__action--after"
          onClick={selectAfter}
        >
          ⟫
        </button>
      </div>
    </div>
  );
}

Paginator.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Paginator;
