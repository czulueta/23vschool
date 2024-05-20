import {ThemeContext} from "../themeContext"
import {useContext} from "react"


export default function Navbar(){

  const {color,navbar, toggleNavbar} = useContext(ThemeContext)
  

  return(
    <div  className={`${color}-theme-${navbar}`}>
      <h1>Navbar</h1>
      <button onClick={toggleNavbar}>Theme</button>
    </div>
  )
}