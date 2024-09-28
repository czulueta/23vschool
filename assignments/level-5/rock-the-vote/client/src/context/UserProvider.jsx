import React, {useState} from "react"
import axios from "axios"

export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token")
  config.headers.Authorization = `Bearer ${token}`
  return config
})

export default function UserProvider(props){

  const [allIssues, setAllIssues] = useState(
    JSON.parse(localStorage.getItem("allIssues")) || []
  )

  const [allComments, setAllComments] = useState(
    JSON.parse(localStorage.getItem("allComments")) || []
  )

  

  const initState = { 
    user : JSON.parse(localStorage.getItem("user")) || {},
    token : localStorage.getItem("token") || "",
    issues: JSON.parse(localStorage.getItem("profileIssues")) || [],
    errMsg: ""
  }

  const [userState, setUserState] = useState(initState)

  async function signup(creds){
    try {
      const res = await axios.post("/api/auth/signup", creds)
      const {user, token} = res.data
      localStorage.setItem("token", token)
      localStorage.setItem("user", JSON.stringify(user))
      setUserState(prevUserState => {
        return{
          ...prevUserState,
          user: user,
          token: token
        }
      })
      getAllIssues()
      getUserIssues()
      getAllComments()
    } catch (err) {
      handleAuthErr(err.response.data.errMsg)
    }
  } 

  async function login(creds){
    try {
      
      const res = await axios.post("/api/auth/login", creds)
      const {user, token} = res.data
      localStorage.setItem("token", token)
      localStorage.setItem("user", JSON.stringify(user))
      setUserState(prevUserState => {
        return {
          ...prevUserState,
          user: user,
          token: token
        }
      })
      getAllIssues()
      getUserIssues()
      getAllComments()
    } catch (err) {
      handleAuthErr(err.response.data.errMsg)
    }
  }

  // async function logout(){
  //   try {
  //     localStorage.removeItem("user")
  //     localStorage.removeItem("token")
  //     localStorage.removeItem("allIssues")
  //     localStorage.removeItem("allComments")
  //     localStorage.removeItem("profileIssues")
  //     initState.token = ""
  //     setUserState(initState) this mutates state
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  async function logout() {
    try {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("allIssues");
      localStorage.removeItem("allComments");
      localStorage.removeItem("profileIssues");
  
      // Clone initState to avoid direct mutation
      setUserState(prevState => ({
        ...initState,
        token: ""  // Ensure token is reset in state
      }));
    } catch (err) {
      console.log(err);
    }
  }

  function handleAuthErr(errMsg){
    setUserState(prevUserState => {
      return{
        ...prevUserState,
        errMsg
      }
    })
  }

  function resetAuthErrMsg(){
    setUserState(prev => {
      return{
        ...prev,
        errMsg: ""
      }
    })
  }
  // getting all the users issues
  async function getUserIssues(){
    try {

      const res = await userAxios.get("/api/main/issues/:userId")
      localStorage.setItem("profileIssues", JSON.stringify(res.data))
      setUserState(prevUserState => {
        
        return {
          ...prevUserState,
          issues: [...res.data]
        }
      })
    } catch (err) {
      console.log(err)
    }
  }

  //get all issues for public page
  async function getAllIssues(){
    try {
      const res = await userAxios.get("/api/main/issues")
      setAllIssues(res.data)
      localStorage.setItem("allIssues", JSON.stringify(res.data))
    } catch (err) {
      console.log(err)
    }
  }
  // adding a new issue to the database
  async function addIssue(newIssue){
    try {
      const res = await userAxios.post("/api/main/issues", newIssue)
      setUserState(prevState => {
        return {
          ...prevState,
          issues: [...prevState.issues, res.data]
        }
      })
    } catch (err) {
      console.log(err)
    }
  }
  // adding a upvote 
  async function handleUpvote(issueId){
    try {
      const res = await userAxios.put(`/api/main/issues/upvotes/${issueId}`, )
      
      setAllIssues(prevIssues => prevIssues.map(issue => issue._id === issueId ? res.data : issue))
      setUserState(prevUserState => {
        return{
          ...prevUserState,
          issues: prevUserState.issues.map(issue => issue._id === issueId ? res.data : issue)
        }
      })
    } catch (err) {
      console.log(err)
    }
  }
  // adding a downvote 
  async function handleDownvote(issueId){
    try {
      const res = await userAxios.put(`/api/main/issues/downvotes/${issueId}`)
      
      setAllIssues(prevIssues => prevIssues.map(issue => issue._id === issueId ? res.data : issue))
      setUserState(prevUserState => {
        return{
          ...prevUserState,
          issues: prevUserState.issues.map(issue => issue._id === issueId ? res.data : issue)
        }
      })
    } catch (err) {
      console.log(err)
    }
  }
  //getting all comments
  async function getAllComments(){
    try {
      const res = await userAxios.get("/api/main/comments")
      setAllComments(res.data)
      localStorage.setItem("allComments", JSON.stringify(res.data))
    } catch (err) {
      console.log(err)
    }
  }
  //adding a new comment to the database
  async function addComment(id, comment){
    try {
      const res = await userAxios.post(`/api/main/comments/${id}`, comment)
      setAllComments(prevAllComments => {
        return [
          ...prevAllComments,
          res.data
        ]
      })
    } catch (err) {
      console.log(err)
    }
  }
  
async function updateIssue(newIssue, issueId){
  try {
    console.log("id", issueId)
    const res = await userAxios.put(`/api/main/issues/${issueId}`, newIssue)
    console.log("Full response", res); // Logs the entire response object
    console.log("Updated Issue", res.data); // Logs the actual data
    const updatedIssue = res.data
    setAllIssues(prevIssues => {
      prevIssues.map(issue => issue._id === issueId ? updatedIssue : issue )})
    setUserState(prevUserState => ({
      ...prevUserState,
      issues: prevUserState.issues.map(issue => issue._id !== issueId ? issue : updatedIssue)
    }))
    getAllIssues()
    getUserIssues()
    getAllComments()

  } catch (err) {
    console.log(err)
  }
}

async function deleteIssue(issueId){
  try {
    const res = await userAxios.delete(`/api/main/issues/${issueId}`)
    
    setAllIssues(prevIssues => prevIssues.filter(issue => issue._id !== issueId))
    setUserState( prevUserState => ({
      ...prevUserState,
      issues: prevUserState.issues.filter(issue => issue._id !== issueId)
    }))
  } catch (err) {
    console.log(err)
  }
}

  return(
      <UserContext.Provider value={{
        ...userState, 
        signup, 
        login, 
        logout, 
        getUserIssues, 
        addIssue,
        handleAuthErr,
        resetAuthErrMsg,
        handleUpvote,
        handleDownvote,
        getAllIssues,
        allIssues,
        allComments,
        getAllComments,
        addComment,
        updateIssue,
        deleteIssue
      }}>
        {props.children}
      </UserContext.Provider>
  )
}