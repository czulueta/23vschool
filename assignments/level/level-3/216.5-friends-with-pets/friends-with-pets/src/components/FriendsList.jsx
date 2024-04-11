
import Friend from "./Friend.jsx"
import "./friends-list.css"

export default function Friendslist({data}) {
  console.log(data)
  const friends = data.map(data => {
    
    return (
      
      <Friend 

        key={data.id}
        {...data}
        

       />
    )
  })
  return(
    
    <div className="friendList-container">
      
      {friends}
    </div>
  )
}