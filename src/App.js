import SearchForm from "./components/SearchForm/SearchForm";
import BookList from "./components/BookList/BookList";
import BookModal from "./components/BookModal/BookModal";

function App() {
  return (
    <div className="container">
      <SearchForm />
      <BookList />
      <BookModal />
    </div>
  );
}

export default App;
