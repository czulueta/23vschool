import {MovieContext} from "./MovieContext.jsx"
import {useContext} from "react";


export default function SearchBox(){

  const {searchMovies, handleChange, handleSubmit} = useContext(MovieContext)
console.log(searchMovies)
  return(
    <div>
      <input
        placeholder="Search For Movies"
        
        value={searchMovies.value}
        onChange={handleChange}
       />
       <button onClick={handleSubmit}>submit</button>
    </div>
  )
}