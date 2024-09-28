import {useState, useContext} from "react"
import {UserContext} from "../context/UserProvider.jsx"
import CommentContainer from "./CommentContainer.jsx"


export default function Issue(props){

  const [isEdit, setIsEdit] = useState(false)

  const {title, description, imgUrl, userId, username, _id, upvotes, downvotes } = props

  const initState = {
    title,
    description,
    imgUrl
  }

  const [ editData, setEditData ] = useState(initState)

  const {user, handleUpvote, handleDownvote, updateIssue, deleteIssue } = useContext(UserContext)
  
  let isUser = userId === user._id 

  function handleChange(e){
    const {name, value} = e.target
    setEditData(prevState => {
      return{
        ...prevState,
        [name]: value
      }
    })
  }

  
  async function handleSubmit(e) {
    e.preventDefault(); // Prevents the form from reloading the page
    
    try {
      console.log("id in submit func", _id)
      await updateIssue(editData, _id); // Wait for the updateIssue to finish
      setEditData(initState); // Reset form to initial state
      toggleEditIssue()
    } catch (err) {
      console.error("Error updating issue", err); // Handle any errors
    }
  }

  function toggleEditIssue(){
    setIsEdit(!isEdit)
  }

  return(
    <div style = {{height: "500px", width: "500px", margin: "15px" }}>
      { !isEdit ? 
        <> 
          <h1>{username}</h1>
          <h2>{title}</h2>
          <h3>{description} </h3>
          <img src={imgUrl} style={{height: "125px", width: "125px"}} />
          <button onClick={() => handleUpvote(_id)} >Up Vote</button>
          <p>{upvotes.length}</p>
          <button onClick={() => handleDownvote(_id)}>Down Vote</button>
          <p>{downvotes.length}</p>

          <CommentContainer issueId={_id}/>
        
          { isUser && (
            <>
            <button onClick={toggleEditIssue}>Edit Issue</button>
            <button onClick={() => deleteIssue(_id)}>Delete Issue</button>
            </>
          )
          }
         </>
         :
         <>
         <form onSubmit={handleSubmit}>
            <input
              name="title"
              value={editData.title}
              onChange={handleChange}
              placeholder="Title"
            />
            <input
              name="description"
              value={editData.description}
              onChange={handleChange}
              placeholder="Description"
            />
            <input
              name="imgUrl"
              value={editData.imgUrl}
              onChange={handleChange}
              placeholder="Image Url"
            />
            <button>Submit</button>
            <button onClick={toggleEditIssue}>Back</button>
         </form>
         </>

      }
    </div>
  )
}