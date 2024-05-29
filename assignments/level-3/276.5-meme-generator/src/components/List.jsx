import React, {useState} from "react"
import EditMeme from "./EditMeme.jsx"

export default function List(props){
  const [showEdit, setShowEdit] = useState(false)

  
  // const [saveEdit, setSaveEdit] = useState([])

  
  
  function handleEditDelete(){
    props.handleDelete(props.id)
  }

  const toggle = () => {
    setShowEdit(prev => !prev)
  }

  console.log(props)
  return(
    <div>
      {/* { memeList } */}
      <p>{props.topText}</p>
      <img src={props.img} />
      <p>{props.bottomText}</p>
      <button onClick={toggle}>Edit</button>
      <button onClick={handleEditDelete}>Delete</button>
      {showEdit && <EditMeme toggle={toggle} handleSaveEdit={props.handleSaveEdit} id={props.id} topText={props.topText} bottomText={props.bottomText} img={props.img}/>}
    </div>
  )
}