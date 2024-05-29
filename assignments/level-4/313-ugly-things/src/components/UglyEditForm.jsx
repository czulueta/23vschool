import {useState} from "react"


export default function UglyEditForm(props){
  const [editedUgly, setEditedUgly] = useState({
    ...props.ugly
    
  })

  function handleEditChange(e){
    const { name, value} = e.target
    setEditedUgly(prev => ({
      ...prev,
      [name]: value
    }))
  }
  function newHandleSave(e){
    e.preventDefault()
    props.handleSaveEdit(props.ugly._id, editedUgly)
    props.toggleEdit()
  }
  return (
    <div className="uglyEdit-form-container">
      <form className="uglyEdit-form" onSubmit={newHandleSave} >
        <input
          name="title"
          value={editedUgly.title}
          onChange={handleEditChange}
          placeholder="New Title"
         />
        <input
          name="imgUrl"
          value={editedUgly.imgUrl}
          onChange={handleEditChange}
          placeholder="New Image"
         />
        <input
          name="description"
          value={editedUgly.description}
          onChange={handleEditChange}
          placeholder="New Description"
         />
        <button className="saveEditBtn">Save Edit</button>
      </form>
    </div>
  )
}