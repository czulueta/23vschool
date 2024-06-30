import {MovieContext} from "./MovieContext.jsx";
import {useContext} from "react";
import Movie from "./Movie.jsx";
import "./movielist.css"



export default function MoviesList(){

  const {stockMovies} = useContext(MovieContext);
  console.log(stockMovies)
  // error handler for stockmovies.length equals zero

  const list = !stockMovies ? 
  (<h1>there are no movies</h1>) 
  : 
  stockMovies.map((movie,index) => {

    return (
      <>
      <Movie
       key={index}
       title={movie.Title}
       year={movie.Year}
       id={movie.imdbID}
       type={movie.Type}
       poster={movie.Poster}

       />
    </>
    )
  })
  return(
    <div className="movie-list-container">
      
       {list} 
    </div>
  )
}