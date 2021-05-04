import React from "react";
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

  const handleClick = (page) => {
    dispatch(selectPage(page));
  };

  const handleBefore = () => {
    if (page > 1) {
      dispatch(selectPage(page - 1));
    }
  };

  const handleAfter = () => {
    if (page < count) {
      dispatch(selectPage(page + 1));
    }
  };

  return (
    <div className="paginator">
      <div className="pages">
        {generate(count).map((el) => (
          <div
            className={`page ${page === el ? "page--active" : ""}`}
            key={el}
            onClick={() => handleClick(el)}
          >
            {el}
          </div>
        ))}
      </div>
      <div className="paginator__actions">
        <div
          className="paginator__action paginator__action--before"
          onClick={handleBefore}
        >
          ⟪
        </div>
        <div
          className="paginator__action paginator__action--after"
          onClick={handleAfter}
        >
          ⟫
        </div>
      </div>
    </div>
  );
}

export default Paginator;
