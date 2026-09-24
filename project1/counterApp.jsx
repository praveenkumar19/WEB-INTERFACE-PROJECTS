import { useState } from 'react';
import './counterApp.css';

function counterApp() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="container">
        <h3>Task 1</h3>
      <h1>Counter App</h1>

      <h2>{count}</h2>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>0</button>
    </div>
  );
}

export default counterApp