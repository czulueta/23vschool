import UglyEditForm from "./UglyEditForm.jsx"
import {UglyContext} from "../uglyContext.jsx"
import {useContext, useState} from "react"


// eslint-disable-next-line react/prop-types
export default function UglyCard({ title, imgUrl, description, ugly, _id}){
  const {
    handleSaveEdit, 
    handleEditChange,
    handleDelete
  } = useContext(UglyContext)

  const [showEdit, setShowEdit] = useState(false)

  function toggleEdit(){
    setShowEdit(prev => !prev)
  }
  function deleteThing(_id){
    handleDelete(ugly._id)
  }
  
  
  return(
    
      <div className="ugly-card">
      
        <img className="imageCard" src={imgUrl}/>
        
        <h2>{title}</h2>
        <p>{description}</p>
        <button className="deleteBtn" onClick={deleteThing}>Delete</button>
        <button className="editBtn" onClick={toggleEdit}>Edit</button>

        {showEdit && 
        <UglyEditForm 
          handleSaveEdit={handleSaveEdit} 
          toggleEdit={toggleEdit}
          ugly={ugly}
          handleEditChange={handleEditChange}
        />}
      </div>
    
  )
}