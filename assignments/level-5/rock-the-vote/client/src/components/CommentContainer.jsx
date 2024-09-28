import CommentForm from "./CommentForm.jsx"
import CommentList from "./CommentList.jsx"
import {useState} from "react"

export default function CommentContainer(props){

  const {issueId} = props

  const [isHidden, setIsHidden] = useState(true)

  function toggleView(){
    setIsHidden(!isHidden)
  }
  return(
    <div>
      
      <CommentForm issueId={issueId} />
      <button onClick={toggleView}>{isHidden ? "Show Comments" : "Hide Comments"}</button>
      {!isHidden && <CommentList issueId={issueId} />}
    </div>
  )
}