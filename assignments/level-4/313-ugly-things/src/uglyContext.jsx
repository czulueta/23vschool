import React, {useState, useEffect} from "react"
import axios from "axios"

const UglyContext = React.createContext()

function UglyContextProvider(props){
  const [inputs, setInputs] = useState({
    title:"",
    description:"",
    imgUrl: ""
  })
  // uglydata data from the api
  const [uglyData, setUglyData] = useState([])


  function handleChange(e){
    const {name, value} = e.target
    setInputs(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  function handleSubmit(e){
    e.preventDefault()
    const Url = "https://api.vschool.io/cesarzulueta/thing"
    
    axios.post(Url, inputs)
    .then(res => setUglyData(prev => [...prev, res.data]))
    .catch(err => console.log(err))
    

  }
  function handleSaveEdit( id, editedUgly){
    
    axios.put(`https://api.vschool.io/cesarzulueta/thing/${id}`, editedUgly)
    .then(res => setUglyData(prev => {
     //const updates = prev.map(thing => thing._id === res.data_id ? res.data : thing)
     const updates = prev.map(thing => {
      if (thing._id === res.data._id){
        return res.data
      } else {
        return thing
      }
     })
     console.log(updates)
     return updates
    }))
    .catch(err => console.log(err))
  }
  function handleDelete(id){
    axios.delete(`https://api.vschool.io/cesarzulueta/thing/${id}`)
    .then(res => setUglyData(prev => {
       return prev.filter(thing => thing._id !== id)
    }))
    .catch(err => console.log(err))
  }
  //getting api data
  useEffect(() => {
    axios.get("https://api.vschool.io/cesarzulueta/thing")
    .then(res => setUglyData(res.data))
    .catch(err => console.log(err))
  },[])
 
  return(
    <UglyContext.Provider value={{
      inputs,
      handleChange,
      handleSubmit,
      uglyData,
      handleSaveEdit,
      handleDelete
      // handleEditChange
    }}>
      {props.children}
    </UglyContext.Provider>
  )
}

export {UglyContext, UglyContextProvider}