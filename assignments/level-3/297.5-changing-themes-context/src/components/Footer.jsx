import {useContext} from "react"
import {ThemeContext} from "../themeContext"

export default function Footer(){
  const {color, toggle} = useContext(ThemeContext)
  return(
    <div className={`${color}-theme-`}>
      <h1>Footer</h1>
      <button onClick={toggle}>Theme</button>
    </div>
  )
}