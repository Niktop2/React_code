import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)
  

 //let counter = 15
  const addValue = () => {
    setCounter(counter + 1)

    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1 )
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
  }


  const removeValue = () => {
    setCounter(counter - 1)
  } 



  return (
    <>
     <h1> React second project </h1>
     <h2>Counter value: {counter}</h2>

     <button onClick={addValue}> Add value </button>
     <br />
     <button onClick={removeValue}> remove value </button>
    </>
  )
}

export default App
