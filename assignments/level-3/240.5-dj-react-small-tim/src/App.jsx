import FourSquares from "./components/FourSquares.jsx"
import SmallTime from "./components/SmallTime.jsx"
import PartyDj from "./components/PartyDj.jsx"
import Professional from "./components/Professional.jsx"
import BigTime from "./components/BigTime.jsx"
import Icon from "./components/Icon.jsx"
import {useState} from "react";
import sound from "./assets/music.wav"

function App() {
  const [colors, setColors] = useState(["white", "white", "white", "white"])

  function blkWht(){
    setColors(prev => prev[0] === "white" ? ["black", "black","black","black"] : ["white", "white","white","white"])
  }
  function purple(){
    setColors(prev => {
      return prev.map((x, index) => (index === 0 || index === 1 ? "purple" : x))
    })
    // setColors( prev => {
    //   prev.map((x,index) => x[0] && x[1] ? "purple" : x )
    // })
    // setColors(prev =>  ["purple","purple", prev[2], prev[3]])
  }
  function blueOne(){
    setColors(prev => prev[2] !== "blue" ? [prev[0], prev[1], "blue", prev[3]] : [...prev])
  }
  function blueTwo(){
    setColors(prev => prev[3] !== "blue" ? [prev[0], prev[1], prev[2], "blue"] : [...prev])
  }
  function bigTime1stDiv(){
    setColors( prev => prev[0] !== "red" ? ["red", prev[1], prev[2], prev[3]] : [...prev])
  }
  function bigTime2ndDiv(){
    setColors(prev =>  prev[1] !== "red" ? [prev[0], "red", prev[2], prev[3]] : [...prev])
  }
  function bigTime3rdDiv(){
    setColors(prev =>  prev[2] !== "red" ? [prev[0], prev[1], "red", prev[3]] : [...prev])
  }
  function bigTime4thDiv(){
    setColors(prev =>  prev[3] !== "red" ? [prev[0], prev[1], prev[2], "red"] : [...prev])
  }
  function music(){
    return(
      new Audio(sound).play()
    )
  }

  return (
    <div className="app-container">
      <SmallTime handleClick={blkWht} />
      <PartyDj handleClick={purple}/>
      <Professional handleClick={blueOne} handleTwo={blueTwo}/>
      <BigTime oneDiv={bigTime1stDiv} twoDiv={bigTime2ndDiv} threeDiv={bigTime3rdDiv} fourthDiv={bigTime4thDiv}/>
      <Icon music={music}/>
      
      <FourSquares colors={colors}/>
    </div>
  )
}

export default App
