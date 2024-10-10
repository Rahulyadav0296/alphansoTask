import React, { createContext, ReactNode, useState } from "react";

interface Task {
  id: number;
  description: string;
  isCompleted: boolean;
}

// Define the types for the context
interface TodoContextType {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  inputSearch: string;
  setInputSearch: React.Dispatch<React.SetStateAction<string>>;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  completed: Task[];
  setCompleted: React.Dispatch<React.SetStateAction<Task[]>>;
  filterTasks: Task[];
  setFilterTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export const TodoContext = createContext<TodoContextType | undefined>(
  undefined
);

interface TodoProviderTypes {
  children: ReactNode;
}

export const TodoProvider: React.FC<TodoProviderTypes> = ({ children }) => {
  const [search, setSearch] = useState<string>("");
  const [inputSearch, setInputSearch] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filterTasks, setFilterTasks] = useState<Task[]>([]);
  const [completed, setCompleted] = useState<Task[]>([]);

  return (
    <TodoContext.Provider
      value={{
        search,
        setSearch,
        tasks,
        setTasks,
        inputSearch,
        setInputSearch,
        filterTasks,
        setFilterTasks,
        completed,
        setCompleted,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
