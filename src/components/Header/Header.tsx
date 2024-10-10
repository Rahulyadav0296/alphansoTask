import React, { ChangeEvent, FormEvent, useContext, useEffect } from "react";
import { TodoContext } from "../utils/TodoContext";
import "./Header.css";

const Header: React.FC = () => {
  const { search, setSearch, setTasks, tasks } = useContext(TodoContext);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (search.trim()) {
      setTasks((prevTasks: any) => {
        const newTask = {
          id: prevTasks.length
            ? Math.max(...prevTasks.map((task: any) => task.id)) + 1
            : 1,
          description: search,
          isCompleted: false,
        };

        return [...prevTasks, newTask];
      });
      setSearch("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        value={search || ""}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setSearch(e.target.value);
        }}
        placeholder="Type Something..."
        className="search-input"
      />
      <button
        type="submit"
        className={`${search === "" ? "disable-task-btn" : "add-task-button"}`}
        disabled={search === ""}
      >
        Add Task
      </button>
    </form>
  );
};

export default Header;
