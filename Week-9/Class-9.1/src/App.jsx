import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AppTodo } from './CustomHooks'
import { MouseApp } from "./Hooks/MousePointer"
import { IntervalApp } from "./Hooks/Interval"
import { DebounceApp } from './Hooks/Debounce'
import OtpApp from './Hooks/Otp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <MouseApp /> */}
      {/* <IntervalApp /> */}
      {/* <DebounceApp /> */}
      <OtpApp />
    </>
  )
}

function Mycomponent() {
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(prev => prev + 1)
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incrementCount}>Increment</button>
    </div>
  )
}

function MyComponent() {
  useEffect(() => {
    //componentDidMount
    console.log('Component mounted')

    return () => {
      //componentWillUnmount
      console.log('Component unmounted')
    }


  })
}

//14:30

export default App
