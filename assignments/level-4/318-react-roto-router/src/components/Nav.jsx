import {Link} from "react-router-dom"


export default function Nav(){
  return(
    <nav>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
      </ul>
    </nav>
  )
}