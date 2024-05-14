import { useState } from 'react'
import BadgeForm from "./components/BadgeForm"
import BadgeField from "./components/BadgeField"


function App() {
  const [inputs, setInputs] = useState({
    firstName:"",
    lastName: "",
    email:"",
    phone:"",
    placeOfBirth:"",
    favFood:"",
    comments:""
  })

  const [badges, setBadges] = useState([])

  function handleChange(event){
    const {name, value} = event.target
    setInputs(prev => ({
      ...prev,
      [name]: value
    }))
  }
  function handleSubmit(event){
    event.preventDefault()
    console.log(badges, "badges")
    console.log(inputs, "inputs")
    setBadges(prev => ([
      ...prev,
      inputs
    ]))
  }
 
  return (
    
      <div>
        <BadgeForm inputs={inputs} handleClick={handleChange} handleSubmit={handleSubmit}/>
        <BadgeField  badges={badges}/>
      </div>
      
    
  )
}

export default App
