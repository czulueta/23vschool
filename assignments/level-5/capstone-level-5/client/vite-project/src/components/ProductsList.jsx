
import ClothingCard from "./ClothingCard.jsx"
import JewelryCard from './JewelryCard.jsx'
import {useContext} from "react"
import {ShopContext} from "../context.jsx"
import { Link } from "react-router-dom"

export default function ProductsList(){

  const {clothing, jewelry} = useContext(ShopContext)

  const clothingList = clothing.map(cloth => {
    return(
    
      <>
        <h3>
          <Link to={`/clothing/${cloth._id}`}>{cloth.product}</Link>
        </h3>
      </>

    )
  })

  const jewelryList = jewelry.map(jewel => {
    console.log(jewel._id)
    return(
      <>
        <h3>
          <Link to={`/jewelry/${jewel._id}`}> {jewel.product} </Link>
        </h3>
      </>
    )
  })
  return(
    <div>
      <h1>Products Page</h1>
      {clothingList}
      {jewelryList}
    </div>
  )
}