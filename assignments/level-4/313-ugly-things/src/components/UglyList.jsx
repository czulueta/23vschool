import UglyCard from "./UglyCard.jsx"
import {UglyContext} from "../uglyContext.jsx"
import {useContext} from "react"


export default function UglyList(){

  const {uglyData} = useContext(UglyContext)

  console.log(uglyData)

  const thingList = uglyData.map(ugly => {
    return(
      <UglyCard 
      
      id={ugly._id} 
      key={ugly._id} 
      title={ugly.title} 
      description={ugly.description} 
      imgUrl={ugly.imgUrl} 
      ugly={ugly} 

      />
      
    )
  })
  console.log(thingList)
  return(
    <div className="ugly-list-container">
      
      {thingList}
    </div>
  )
}