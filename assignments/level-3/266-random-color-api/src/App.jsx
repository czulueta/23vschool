import { useState, useEffect } from 'react'
import axios from "axios"
import "./app.css"


function App() {

  const [ colors, setColors ] = useState("")
  
  useEffect(() => {
    axios.get("https://random-color.onrender.com/colors/random")
    .then(res => setColors(res.data.hex))
    .catch(err => console.log(err))
  },[])
  function handleChange(){
    axios.get("https://random-color.onrender.com/colors/random")
    .then(res => setColors(res.data.hex))
    .catch(err => console.log(err))
  }

  return (
    <div className="color-div" style={{backgroundColor:`${colors}`}} >
      <button onClick={handleChange} >change the color</button>
    </div>
  )
}

export default App
