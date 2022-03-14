import SearchForm from "./components/SearchForm/SearchForm";
import BookList from "./components/BookList/BookList";
import BookModal from "./components/BookModal/BookModal";

function App() {
  return (
    <>
      <div className="container">
        <div className="search-app">
          <SearchForm />
          <BookList />
        </div>
      </div>
      <BookModal />
    </>
  );
}

export default App;
