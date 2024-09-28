import { useContext } from "react"
import { UserContext } from "../context/UserProvider"
import Issue from "./Issue.jsx"


export default function PublicList(){

  const { allIssues } = useContext(UserContext)

  console.log("allIssues:", allIssues)

  const issuesList = allIssues.map(issue => {
    return (
      <Issue {...issue} key={issue._id} />
    )
  })
  return (
      <div>
        <h1>test</h1>
        {issuesList}
      </div>
  )
}