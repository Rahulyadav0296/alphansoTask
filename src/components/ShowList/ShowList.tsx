import { useContext, useEffect } from "react";
import { TodoContext } from "../utils/TodoContext";
import "./ShowList.css";

function ShowList() {
  const { tasks, filterTasks, setFilterTasks, setTasks } =
    useContext(TodoContext);

  useEffect(() => {
    setFilterTasks(tasks);
  }, [tasks]);

  const handleMarked = (indexId: number) => {
    const updatedTasks = tasks.map((task: any) =>
      task.id === indexId ? { ...task, isCompleted: !task.isCompleted } : task
    );

    console.log(updatedTasks);

    setTasks(updatedTasks);
    setFilterTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleDelete = (id: number) => {
    const filterItem = tasks.filter((task: any) => task.id !== id);
    setTasks(filterItem);
    setFilterTasks(filterItem);
    localStorage.setItem("tasks", JSON.stringify(filterItem));
  };

  return (
    <div className="task-list">
      {filterTasks && filterTasks.length > 0 ? (
        filterTasks.map((task: any) => (
          <div
            key={task.id}
            className={`task-item ${task.isCompleted ? "marked" : ""}`}
          >
            <div className="search-list-items">
              <button
                className="mark-btn"
                onClick={() => {
                  handleMarked(task.id);
                }}
              >
                <i
                  className={`fa-regular ${
                    task.isCompleted ? "fa-circle-check" : "fa-circle"
                  }`}
                ></i>
              </button>
              <p className="task-desc">{task.description}</p>
            </div>
            <button
              className="delete-btn"
              onClick={() => {
                handleDelete(task.id);
              }}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        ))
      ) : (
        <p className="no-tasks">No tasks available</p>
      )}
    </div>
  );
}

export default ShowList;
