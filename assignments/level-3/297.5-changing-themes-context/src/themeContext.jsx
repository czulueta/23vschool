import React, {useState} from "react"

const ThemeContext = React.createContext()

function ThemeContextProvider(props){
  const [color, setColor] = useState("dark")
  const [navbar, setNavbar] = useState(" ")

  function toggle(){ 
  setColor(prev => prev === "dark" ? "light" : "dark")
  
}
  function toggleNavbar(){
    setNavbar(prev => prev === "" ? "navbar" : "")
  }
  return(
      <ThemeContext.Provider value={{
        color,
        toggle,
        navbar,
        toggleNavbar
      }}>
        {props.children}
      </ThemeContext.Provider>
  )
}

export {ThemeContext, ThemeContextProvider}


