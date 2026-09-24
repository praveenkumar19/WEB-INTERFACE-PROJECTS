import { useState } from 'react'
import './App.css'
import Att from './attendance.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Att/>
    </>
  )
}

export default App
