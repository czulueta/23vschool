import {useState} from "react";

export default function DiceBox(){
  const [numbers, setNumbers] = useState([])

  function rollDice(){
    setNumbers(prev => ([
      
      Math.floor(Math.random() * 6),
      Math.floor(Math.random() * 6),
      Math.floor(Math.random() * 6),
      Math.floor(Math.random() * 6),
      Math.floor(Math.random() * 6)

    ]))
  }
  console.log(numbers)
  return(
    <div className="dicebox">
      <h1>{numbers}</h1>
      <button onClick={rollDice}>Roll Me</button>
    </div>
  )
}