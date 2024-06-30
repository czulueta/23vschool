import {Link} from "react-router-dom"

export default function Footer(){
  return(
    <div>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
      </ul>
    </div>
  )
}