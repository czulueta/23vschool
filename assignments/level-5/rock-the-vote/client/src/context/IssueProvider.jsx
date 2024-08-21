// state for issues state for user issues two different states for public page with all issues
import React, { useState, useEffect } from "react"
import axios from "axios"

export const IssueContext = React.createContext()

const issueAxios = axios.create()

issueAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token")
  config.headers.Authorization = `Bearer ${token}`
  return config
})

export default function IssueProvider(props){

  const [allIssues, setAllIssues] = useState([])

  async function getAllIssues(){
    try {
      const res = await issueAxios.get("/api/main/issues")
      setAllIssues(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getAllIssues()
  },[])
  
  return(
    <IssueContext.Provider value={{getAllIssues, allIssues}}>
      {props.children}
    </IssueContext.Provider>
  )
}

