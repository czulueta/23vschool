import "./card.css"

// eslint-disable-next-line react/prop-types
export default function Card({place, price, timeToGo, image}){
  return (
    <div className="card-container">
      <h3>{place}</h3>
      <img className="image" src={image} />
      <p>{price}</p>
      <p>{timeToGo}</p>
    </div>
  )
}
