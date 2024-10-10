import { useContext } from "react";
import { TodoContext } from "../../utils/TodoContext";
import Buttons from "./Buttons/Buttons";
import "./SearchHeader.css";

function SearchHeader() {
  const todoContext = useContext(TodoContext);

  if (!todoContext) {
    // Handle the case where context is undefined, e.g., return an error or fallback UI
    return null;
  }
  const { inputSearch, setInputSearch, tasks, setFilterTasks } = todoContext;

  const handleSearchInput = () => {
    const searchItems = tasks.filter((task: any) =>
      task.description.toLowerCase().includes(inputSearch.toLowerCase())
    );
    console.log(searchItems);
    setFilterTasks(searchItems);
    setInputSearch("");
  };

  return (
    <div className="search-header-container">
      <h1 className="header-title">Today</h1>
      <form
        className="search-input-container"
        onSubmit={(e) => {
          e.preventDefault();
          handleSearchInput();
        }}
      >
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          value={inputSearch}
          onChange={(e) => {
            setInputSearch(e.target.value);
          }}
          placeholder="Search"
          className="search-input-header"
        />
      </form>
      <Buttons />
    </div>
  );
}

export default SearchHeader;
