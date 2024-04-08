import Navbar from "./Navbar"
import "./header.css"


export default function Header(){
  return(
    <div className="header-container">
      <Navbar />
      <h1 className="head-title">Clean Blog</h1>
      <h4>A Blog Theme by Startup BootStrap</h4>
    </div>
  )
}