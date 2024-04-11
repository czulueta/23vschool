import "./pets.css"

export default function Pets({name, breed}){
  return(
    <div className="pet-container">
      <h4>{name}</h4>
      <p>{breed}</p>
    </div>
  )
}