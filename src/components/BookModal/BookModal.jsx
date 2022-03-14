import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bookModalClose } from "../../redux/bookModal/actions";
import defaultCover from "../../img/book-icon.svg";
import "./BookModal.css";

function BookModal(props) {
  const { item, active } = useSelector((state) => state.bookModal);
  const dispatch = useDispatch();

  const closeBook = (event) => {
    event.preventDefault();
    if (
      event.target.classList.contains("modal__button") ||
      !event.target.closest(".modal__card")
    ) {
      dispatch(bookModalClose());
    }
  };
  return (
    <div
      className={`book modal ${active ? "modal--active" : ""}`}
      onClick={(event) => closeBook(event)}
    >
      <div className="modal__card">
        <button className="modal__button">&times;</button>
        {item && (
          <div className="modal__content">
            <div className="book__cover">
              <img
                src={
                  item.cover_i
                    ? `http://covers.openlibrary.org/b/id/${item.cover_i}-L.jpg`
                    : defaultCover
                }
                alt=""
                className="book__image"
              />
            </div>
            <div className="book__details">
              <div className="book__details-block book__title-block">
                <p className="book__title">{item.title}</p>
                {item.author_name && (
                  <p className="book__author">{item.author_name[0]}</p>
                )}
              </div>
              <div className="book__details-block">
                {item.publisher && (
                  <p className="book__publisher">{item.publisher[0]}</p>
                )}
                {item.publish_date && (
                  <p className="book__date">{item.publish_date[0]}</p>
                )}
              </div>
              <div className="book__details-block">
                {item.isbn && <p className="book__id">ISBN {item.isbn[0]}</p>}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookModal;
