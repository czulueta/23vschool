import {useContext} from "react"
import {UserContext} from "../context/UserProvider.jsx"


export default function CommentList(props){

  const {issueId} = props
  const {allComments} = useContext(UserContext)

  const filteredComments = allComments.filter(comment => comment.issueId === issueId)

  const issueComments = filteredComments.map(comment => {
    return(
      <>
        <p>{comment.username}:</p>
        <p>{comment.text}</p>
      </>
    )
  })
  
  return(
    <div>
      {issueComments}

    </div>
  )
}