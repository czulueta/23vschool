import {useState} from "react"


function App() {
  const [input1, setInput1] = useState("")

  const [input2, setInput2] = useState("")
  const [input3, setInput3] = useState(45)

  function handleColor1(e){
    const {value} = e.target
    setInput1(value)
  }
  function handleColor2(e){
    const {value} = e.target
    setInput2(value)
  }
  function handleAngle(e){
    const {value} = e.target
    setInput3(value)
  }

//  input tags for colors type for colors
//  second input for second state
// create a style object for the background grdadient. Note the property is background: "string for the linear gradient"
const styles = {
  // background: linear-gradient(to left, #333, #333 50%, #eee 75%, #333 75%);
  background: `linear-gradient(${input3}deg, ${input1},${input2})`,
  // background: 'linear-gradient(#e66465, #9198e5)',
  
  width: "200px",
  height: "200px",
  border:"solid",
}
  // background: "linear-gradient(50deg, #FFFF00 , #000000)",
  // -moz-background: "linear-gradient(50deg, #FFFF00 , #000000)",
  // -webkit: "linear-gradient(50deg, #FFFF00 , #000000)",
  return (
    <>
      <input onChange={handleColor1} type="color" />
      <input onChange={handleColor2} type="color" />
      <input type="number" onChange={(handleAngle)} />
      
      <textarea 
        
       readOnly value={`background: linear-gradient(${input3}deg, ${input1}, ${input2})`}
        
      />
      <div className="div" style={styles}> something</div>
    </>
  )
}

export default App
