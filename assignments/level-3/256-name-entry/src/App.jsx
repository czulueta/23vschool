import React from "react"
import { useState } from 'react'


function App() {
  const [input, setInput] = useState({
    firstName: ""
  })
  const [data, setData] = useState([])
  
  const dataNames= []
  function handleChange(event){
    const {name, value} = event.target
    
    setInput((prev) => ({
      ...prev,
      [name]: value
    }))
    console.log(value)
  }
  
  function handleSubmit(event){
    event.preventDefault()
    setData([...data, input.firstName])
  }
  
  return (
    
      <div className="app-container">
        <form onSubmit={handleSubmit}>
          <input
            name="firstName"
            value={input.firstName}
            type="text"
            onChange={handleChange} />
          <button>Submit</button>
        </form>
        <h1>{input.firstName}</h1>
        {data.map((name, index) => (
        <h2 key = {index}>{name}</h2>
        ))}
      </div>
  
    
  )
}

export default App
