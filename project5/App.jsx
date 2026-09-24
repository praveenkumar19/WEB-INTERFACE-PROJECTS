import { useState } from 'react'
import './App.css'
import Cal from './calculator.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Cal/>
    </>
  )
}

export default App
