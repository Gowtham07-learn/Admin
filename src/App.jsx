import { useState } from 'react'
import SignupFormDemo from './components/signup-form-demo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SignupFormDemo/>
    </>
  )
}

export default App
