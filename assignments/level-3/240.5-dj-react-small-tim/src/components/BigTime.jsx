

export default function BigTime({oneDiv, twoDiv, threeDiv, fourthDiv}){
  console.log({oneDiv})
  return(
    <div>
      <button onClick={oneDiv}>1st Square</button>
      <button onClick={twoDiv}>2nd Square</button>
      <button onClick={threeDiv}>3rd Square</button>
      <button onClick={fourthDiv}>4th Square</button>
    </div>
  )
}