import BountyHunterForm from "./BountyHunterForm.jsx"
import { useState } from "react";

export default function Bounty(props){
  const { firstName, lastName, _id, living, bounty, type, deleteBounty, editBounty } = props

  const [ editToggle, setEditToggle ] = useState(false)
  
  function deleteB(){
    deleteBounty(_id)
  }

  function toggleForm(){
    setEditToggle(prev => !prev)
  }

  return (
    <div className="bounty">
      {
        !editToggle ?
        <>
          <h1>First Name: {firstName}</h1>
          <h1>Last Name: {lastName}</h1>
          <h3>Is this bounty alive?: {`${living}`}</h3>
          <h3>Bounty Price: {bounty} </h3>
          <h2>Jedi or Sith: {type}</h2>
          <button className="delete-btn"
            onClick={deleteB} >
            Delete Bounty
          </button>
          <button
            className="edit-btn"
            onClick={toggleForm}>
            Edit 
          </button>
        </>
      :
        <>
          <BountyHunterForm
            firstName={firstName}
            lastName={lastName}
            living={living}
            bounty={bounty}
            type={type}
            btnText="Submit Edit" 
            submit={editBounty}
            _id={_id}       
            editToggle = { editToggle }
            setEditToggle = { setEditToggle }
          />
          <button
            className="edit-btn" 
            onClick={toggleForm}>
            Close
          </button>
        </>
      }
        
    </div>
  )
}