import {ThemeContext} from "../themeContext"
import {useContext} from "react"


export default function Navbar(){

  const {color,navbar,toggle, toggleNavbar} = useContext(ThemeContext)
  

  return(
    <div  className={`${color}-theme-${navbar}`}>
      <h1>Navbar</h1>
      <button onClick={toggleNavbar}>Theme navbar</button>
      <button onClick={toggle}>Theme</button>
    </div>
  )
}