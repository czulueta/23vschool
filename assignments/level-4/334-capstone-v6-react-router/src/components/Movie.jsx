import "./movie.css";
import {Link} from "react-router-dom"
import MovieInfo from "./MovieInfo.jsx";

export default function Movie({title, year, id, poster, type }){
  
  
  return(
    <div className="movie-container">
      <Link>

      <img src={poster} alt="movie" />
      </Link>
      
      <h3>{title}</h3>
      <h4>{type}</h4>
      <h4>{year}</h4>
      <p>Imbd Id: {id}</p>
    </div>
  )
}