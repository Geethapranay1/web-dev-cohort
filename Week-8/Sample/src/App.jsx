import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("");

  return (
    <div style={{backgroundColor:color, height:"100vh"}}>
      <Button onClick={() => setColor("red")}/>
    </div>
  )
}

function Button({onClick}) {
  return <div >
    <button style={{backgroundColor:"red", width:"100px", height:"100px"}} onClick= {onClick} >Click me</button>
  </div>
}

export default App
