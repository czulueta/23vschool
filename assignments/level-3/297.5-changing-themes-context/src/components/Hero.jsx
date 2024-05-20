import {useContext} from "react"
import {ThemeContext} from "../themeContext"

export default function Hero(){
  const {color, toggle} = useContext(ThemeContext)
  return (
    <div className={`${color}-theme-`}>
      <h1>Main</h1>
      <button onClick={toggle}>Theme</button>
    </div>
  )
}