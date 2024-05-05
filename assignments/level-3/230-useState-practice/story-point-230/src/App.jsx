import { useState } from "react"
import "./app.css"


function App() {
  const [color, setColor] = useState(["pink"])

  function newColor(){
    setColor(prev => {
      [...prev, "blue"]
    })
  } 
  const changeColor = color ? "blue" : "pink"
  

  return (
    <>
      <div className="main-div" onClick={newColor}>
        <h1 style="`color:${changeColor}`" >Color</h1>
      </div>
    </>
  )
}

export default App


const [people, setPeople] = useState([
	{
		firstName: "John",
		lastName: "Smith"
	}
])

setPeople(prev => {
  return [
    ...prev,
  { firstName: "Cesar",
    lastName: "Zulueta"
  }
  ]
})

const [colors, setColors] = useState(["pink", "blue"])

setColors([...colors, "green"])

const [countObject, setCountObject] = setState({
	count: 0
})

setCountObject({count: countObject.count + 1})


const [person, setPerson] = useState({
  firstName: "John",
  lastName: "Smith"
})

setPerson(prev => {
  return {
    ...prev,
    age: 30
  }
})

