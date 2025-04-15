import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchFieldChange } from "../../redux/search/actions";
import { booksListRequest } from "../../redux/booksList/actions";
import "./SearchForm.css";

function SearchForm(props) {
  const { name } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(searchFieldChange(event.target.name, event.target.value));
  };

  const searchRequest = (event) => {
    event.preventDefault();
    if (name) {
      dispatch(booksListRequest(name));
    }
  };

  return (
    <div className="search">
      <form className="search__form" onSubmit={searchRequest}>
        <div className="input-block">
          <input
            name="name"
            value={name}
            onChange={handleChange}
            type="text"
            placeholder="Введите название книги или имя автора"
          />
        </div>
        <button className="search-form__button">
          <span>Найти</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 -0.5 25 25" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M5.5 11.1455C5.49956 8.21437 7.56975 5.69108 10.4445 5.11883C13.3193 4.54659 16.198 6.08477 17.32 8.79267C18.4421 11.5006 17.495 14.624 15.058 16.2528C12.621 17.8815 9.37287 17.562 7.3 15.4895C6.14763 14.3376 5.50014 12.775 5.5 11.1455Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.989 15.4905L19.5 19.0015"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
