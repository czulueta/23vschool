import {useState} from "react"

export default function EditMeme(props){

  const [editMeme, setEditMeme ] = useState({
    topText: props.topText,
    bottomText:props.bottomText,
    img:props.img,
    id: props.id
  })

  const handleEditChange = (e) => {
    const { name, value } = e.target
    setEditMeme(prev => ({
      ...prev,
      [name]: value
    }))

  }
  function handleSave(e){
    e.preventDefault();
    props.handleSaveEdit(props.id, editMeme)
    props.toggle()

  }

  return(
      <form onSubmit={handleSave}>
        <input
          type="text"
          name="topText"
          value={editMeme.topText}
          onChange={handleEditChange}
         />
        <input
          type="text"
          name="bottomText"
          value={editMeme.bottomText}
          onChange={handleEditChange}
         />
         <button>Save</button>
         <button onClick={props.toggle}>Cancel</button>
      </form>
  )
}