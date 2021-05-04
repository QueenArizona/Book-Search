import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchFieldChange } from "../../redux/search/actions";
import { bookListRequest } from "../../redux/bookList/actions";
import "./SearchForm.css";

function SearchForm(props) {
  const { name } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(searchFieldChange(event.target.name, event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name) {
      dispatch(bookListRequest(name));
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-form__fieldset">
        <input
          className="search-form__field"
          name="name"
          value={name}
          onChange={handleChange}
          type="text"
          placeholder="Введите название книги или имя автора"
        />
      </div>
      <button className="search-form__button">Найти</button>
    </form>
  );
}

export default SearchForm;
