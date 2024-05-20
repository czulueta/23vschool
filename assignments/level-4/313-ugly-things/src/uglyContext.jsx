import React, {useState} from "react"

const UglyContext = React.createContext()

function UglyContextProvider(props){
  const [inputs, setInputs] = useState({
    title:"",
    img: URL,
    description:""
  })

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prev => ({
      prev,
      [name]: value
    }))
  }
  return(
    <UglyContext.Provider value={{
      inputs,
      handleChange
    }}>
      {props.children}
    </UglyContext.Provider>
  )
}

export {UglyContext, UglyContextProvider}