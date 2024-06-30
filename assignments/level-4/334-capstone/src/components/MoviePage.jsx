import Navbar from "./Navbar.jsx";
import {useLoaderData} from "react-router-dom"
export default function MoviePage(){
  const data = useLoaderData()
  console.log(data)
  return(
    <div>
      <Navbar />
      <h1>Movies to Watch</h1>
    </div>
  )
}