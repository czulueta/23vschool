import "./fourSquares.css"

// eslint-disable-next-line react/prop-types
export default function FourSquares({colors}){
  
  // const styles = {
  //     backgroundColor: "{colors}"
      
  // }
  
  const squareColor = colors.map((color, index) => (
    <div  style={{backgroundColor: color}} className="box" key={index} ></div>
  ))
  return(
    <div className="four-squares-container">
        {squareColor}
        
    </div>
  )
}