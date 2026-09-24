import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

import "./App.css";

function App() {

  const [tasks, setTasks] = useState([]);

  // Add task
  function addTask(task) {
    setTasks([...tasks, task]);
  }

  // Delete task
  function deleteTask(index) {
    const newTasks = tasks.filter((_, i) => i !== index);

    setTasks(newTasks);
  }

  return (
    <div className="app">

      <h1>To-Do App</h1>

      <TodoInput addTask={addTask} />

      <TodoList
        tasks={tasks}
        deleteTask={deleteTask}
      />

    </div>
  );
}

export default App