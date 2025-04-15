import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bookModalClose } from "../../redux/bookModal/actions";
import "./BookModal.css";

function BookModal(props) {
  const { item, active } = useSelector((state) => state.bookModal);
  const dispatch = useDispatch();

  const closeBook = (event) => {
    event.preventDefault();
    const target = event.target;

    if (target.closest(".modal__button") || !target.closest(".modal__card")) {
      dispatch(bookModalClose());
    }
  };
  return (
    <div
      className={`book-modal modal ${active ? "modal--active" : ""}`}
      onClick={(event) => closeBook(event)}
    >
      <div className="modal__layout">
        <div className="modal__inner">
          <button className="modal__close">
            <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="-0.5 0 25 25" fill="none">
              <path d="M3 21.32L21 3.32001" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 3.32001L21 21.32"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {item && (
            <div className="modal__body">
              <div className="modal__wrapper">
                <div className="book-modal__content">
                  <h2>{item.title}</h2>
                  {item.author_name && (
                    <p>{item.author_name[0]}</p>
                  )}
                </div>
                {item.cover_i ? (
                  <div className="book-modal__icon">
                    <img src={`http://covers.openlibrary.org/b/id/${item.cover_i}-L.jpg`} alt=""/>
                  </div>
                ) : ''}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookModal;
