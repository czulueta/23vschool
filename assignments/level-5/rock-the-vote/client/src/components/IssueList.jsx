import Issue from "./Issue.jsx"
import {useContext} from "react"
import {UserContext} from "../context/UserProvider.jsx"

export default function IssueList(){

  const { ...userState } = useContext(UserContext)

  const issueElements = userState.issues.map(issue => {
    console.log(issue._id)
    return (
      <Issue {...issue} key={issue._id} />
    )
  })
  
  return (
    <div >
      <h1>Random Profile</h1>
      <h3>Issues</h3>
      {issueElements}
    </div>
  )
}