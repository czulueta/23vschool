import {useParams} from "react-router-dom"
import {ShopContext} from "../context.jsx"
import React from "react"



export default function ClothingCard({id, product, description, price, quantity, category}){
  const { clothing } = React.useContext(ShopContext)
  const { clothingId } = useParams()
  const foundClothing = clothing.find( item => item._id === clothingId )

  return(
    <div className="product-container">
      <h2>Product: {foundClothing.product} </h2>
      <p>Description: {foundClothing.description} </p>
      <p>Price: {foundClothing.price} </p>
      <p>Sizes: {foundClothing.size}</p>
      <p>How many in stock: {foundClothing.quantity} </p>
      <h4>Category: {foundClothing.category}</h4>
    </div>
  )
}