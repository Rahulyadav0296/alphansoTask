import Header from "./components/Header/Header";
import SearchHeader from "./components/Header/SearchHeader/SearchHeader";
import ShowList from "./components/ShowList/ShowList";

function App() {
  return (
    <div className="search-container">
      <SearchHeader />
      <ShowList />
      <Header />
    </div>
  );
}

export default App;
