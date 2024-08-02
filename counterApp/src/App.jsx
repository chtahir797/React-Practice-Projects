import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const increment = () =>{
    setCount(count + 1)
  }
  const decrement = ()=>{
    // console.log("decrement ", count--)
    setCount(count - 1)
  }
  return (
    <>
      <button onClick={increment}>Increment</button>
      <h2>{count}</h2>
      <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default App
