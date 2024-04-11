//import React from "react";
import Pets from "./Pets.jsx"
import "./friend.css"


// eslint-disable-next-line react/prop-types
export default function Friend({name, age, pets}){
  // eslint-disable-next-line react/prop-types
  console.log(pets)
  const newPets = pets.map(pet => {
    
    return (
      <Pets
        key={pet.id}
        {...pet}
       />
    )
  })
  return(
    <div className="friend-container">
      <h2>{name}</h2>
      <p>{age}</p>
      {newPets}
    </div>
  )
}