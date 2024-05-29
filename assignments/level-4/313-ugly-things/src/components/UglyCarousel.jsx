import {UglyContext} from "../uglyContext.jsx"
import {useContext, useState} from "react"
import "./uglycarousel.css";
import ArrowLeft from "../assets/whiteArrowLeft.svg"
import ArrowRight from "../assets/whiteArrowRight.svg"

export default function UglyCarousel(){

  const {uglyData} = useContext(UglyContext);

  const [carouselCard, setCarouselCard] = useState(0)

  function prevCard(){
    setCarouselCard(carouselCard === 0 ? uglyData.length -1 : carouselCard -1)
  }
  function nextCard(){
    setCarouselCard(carouselCard === uglyData.length -1 ? 0 : carouselCard + 1)
  }
  // carouselCard === data.length -1 ? 0 :
  const cards = uglyData.map((item,index) => {
    
    return(
      <div className={carouselCard === index ? "carouselCard" : "carouselCard carouselCard-hidden"} key={item.index} >
        
        <img className="carouselImg" src={item.imgUrl}  /> 
        <h1 className="carouselTitle">{item.title}</h1> 
        <p className="carouselDesc">{item.description}</p>
        <button onClick={prevCard} className="arrow" style={{left: 0}}>
          <img  src={ArrowLeft} />
        </button>
        <button onClick={nextCard} className="arrow" style={{right: 0}}>
          <img  src={ArrowRight} />
        </button>
      </div>
    )
  })
  
  return(
    <div className="carousel-container">
      {cards}
    </div>
  )
}