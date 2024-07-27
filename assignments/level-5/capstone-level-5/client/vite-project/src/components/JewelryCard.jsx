import { useParams } from "react-router-dom"
import React from "react"
import { ShopContext } from "../context"

export default function JewelryCard({id, product, description, category}) {
  const { jewelry } = React.useContext(ShopContext)
  const { jewelryId } = useParams()
  const chosenJewelry = jewelry.find( item => item._id === jewelryId )
  // console.log(jewelry)
  // console.log(jewelryId)
  // console.log(chosenJewelry)

  return (
    <div className="product-container">
      <h2>{chosenJewelry.product}</h2>
      <p>{chosenJewelry.description}</p>
      <h4>{chosenJewelry.category}</h4>
      
    </div>
  )
}