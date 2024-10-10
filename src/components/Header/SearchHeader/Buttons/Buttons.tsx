import { useContext, useState } from "react";
import { TodoContext } from "../../../utils/TodoContext";

function Buttons() {
  const todoContext = useContext(TodoContext);

  if (!todoContext) {
    // Handle the case where context is undefined, e.g., return an error or fallback UI
    return null;
  }
  const { tasks, setFilterTasks } = todoContext;
  const [activeFilter, setActiveFilter] = useState("all");

  const handleAll = () => {
    setFilterTasks(tasks);
    setActiveFilter("all");
  };

  const handleComplete = () => {
    const completedTasks = tasks.filter(
      (task: any) => task.isCompleted === true
    );
    setFilterTasks(completedTasks);
    setActiveFilter("completed");
  };

  const handleIncomplete = () => {
    const InCompleteTasks = tasks.filter(
      (task: any) => task.isCompleted === false
    );
    setFilterTasks(InCompleteTasks);
    setActiveFilter("");
  };
  return (
    <div className="button-group">
      <button
        className={`filter-button ${activeFilter === "all" ? "active" : ""}`}
        onClick={handleAll}
      >
        All
      </button>
      <button
        className={`filter-button ${
          activeFilter === "completed" ? "active" : ""
        }`}
        onClick={handleComplete}
      >
        Completed
      </button>
      <button
        className={`filter-button ${
          activeFilter === "incomplete" ? "active" : ""
        }`}
        onClick={handleIncomplete}
      >
        Incomplete
      </button>
    </div>
  );
}

export default Buttons;
