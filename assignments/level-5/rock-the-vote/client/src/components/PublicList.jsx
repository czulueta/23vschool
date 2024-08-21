import { useContext } from "react"
import { IssueContext } from "../context/IssueProvider"
import Issue from "./Issue.jsx"


export default function PublicList(){

  const { allIssues } = useContext(IssueContext)

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