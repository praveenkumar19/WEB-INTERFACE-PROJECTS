function TodoList({ tasks, deleteTask }) {

  return (
    <ul>

      {tasks.map((task, index) => (

        <li key={index}>

          <span>{task}</span>

          <button
            onClick={() => deleteTask(index)}
          >
            Delete
          </button>

        </li>

      ))}

    </ul>
  );
}

export default TodoList