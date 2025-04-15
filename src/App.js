import SearchForm from "./components/SearchForm/SearchForm";
import BooksList from "./components/BooksList/BooksList";
import BookModal from "./components/BookModal/BookModal";

function App() {
  return (
    <>
      <div className="app">
        <div className="container">
          <SearchForm />
          <BooksList />
        </div>
      </div>
      <BookModal />
    </>
  );
}

export default App;
