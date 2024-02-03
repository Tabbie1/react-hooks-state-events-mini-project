import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [filteredCategory, setFilteredCategory] = useState("All");

  const handleTaskFormSubmit = ({ text, category }) => {
    const newTask = { text, category };
    setTasks([...tasks, newTask]);
  };

  const handleTaskDelete = (taskText) => {
    setTasks(tasks.filter((task) => task.text !== taskText));
  };

  const handleCategoryFilter = (category) => {
    setFilteredCategory(category);
  };

  const filteredTasks = filteredCategory === "All" ? tasks : tasks.filter((task) => task.category === filteredCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onCategoryFilter={handleCategoryFilter} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={filteredTasks} onDelete={handleTaskDelete} />
    </div>
  );
}

export default App;
