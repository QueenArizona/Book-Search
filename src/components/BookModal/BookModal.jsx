import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bookModalClose } from "../../redux/bookModal/actions";
import defaultCover from "../../img/book-icon.svg";
import "./BookModal.css";

function BookModal(props) {
  const { item, active } = useSelector((state) => state.bookModal);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(bookModalClose());
  };
  return (
    <div className={`book modal ${active ? "modal--active" : ""}`}>
      <div className="modal__card">
        <div className="modal__actions">
          <button className="modal__button" onClick={handleClose}>
            &times;
          </button>
        </div>
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
              <div className="book__wrapper">
                <p className="book__title">{item.title}</p>
                {item.author_name && (
                  <p className="book__author">{item.author_name[0]}</p>
                )}
              </div>
              <div className="book__wrapper">
                {item.publisher && (
                  <p className="book__publisher">{item.publisher[0]}</p>
                )}
                {item.publish_date && (
                  <p className="book__date">{item.publish_date[0]}</p>
                )}
              </div>
              <div className="book__wrapper">
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
