import Issue from "./Issue.jsx"

export default function IssueList(props){

  const {issues} = props

  const issueElements = issues.map(issue => {
    return (
      <Issue {...issue} key={issue._id} />
    )
  })

  return (
    <div>
      <h3>Issues</h3>
      {issueElements}
    </div>
  )
}