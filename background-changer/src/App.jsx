import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('#C4422A')
  const changeColor = () =>{
    let color = '#'
    let hexaValues = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++) {
      color += hexaValues[Math.floor(Math.random() * (hexaValues.length ))]
    }
    setColor(color)
    document.body.style.backgroundColor = color;
  }
  return (
    <>
      <button onClick={changeColor}>Change BackGround</button>
      <h2>{color}</h2>
    </>
  )
}

export default App
