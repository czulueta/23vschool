import {useState, useContext} from "react"
import { UserContext } from "../context/UserProvider"

export default function IssueForm(){

  const { addIssue } = useContext(UserContext)

  const initState = {
    title: "",
    description: "",
    imgUrl: ""
  }

  const [formData, setFormData] = useState(initState)

  function handleChange(e){
    const {name, value} = e.target
    setFormData(prevState => {
      return{
        ...prevState,
        [name]: value
      }
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    addIssue(formData)
    setFormData(initState)
  }

  return(
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
      />
      <input
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <input
        name="imgUrl"
        value={formData.imgUrl}
        onChange={handleChange}
        placeholder="Image Url"
      />
      <button>Submit</button>
    </form>
  )
}