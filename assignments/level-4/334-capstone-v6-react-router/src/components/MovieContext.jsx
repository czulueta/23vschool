import React from "react";
import {useState, useEffect} from "react";
import axios from "axios";

const MovieContext = React.createContext();

function MovieContextProvider(props){

  const [movies, setMovies] = useState([]);
  const [searchShows, setSearchShows] = useState([]);
  const [placeholder, setPlaceholder] = useState(null);
  const [searchMovies, setSearchMovies] = useState(""); 

  const [stockMovies, setStockMovies] = useState([])

  // get all api movies
  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?s=${searchMovies}&apikey=88a103d3&type=movie`)
    //.then(res => console.log(searchMovies))
    .then(res => {
      console.log(searchMovies)
      console.log(res.data.Search)
      setStockMovies(res.data.Search)
    })
    
    .catch(err => console.log(err))
  },[searchMovies])

  function handleChange(e){

    // ifelse where 
    const {value} = e.target;
    setPlaceholder(value)
  }

  function handleSubmit(e){
    e.preventDefault();
    setSearchMovies(placeholder)
  }
  
  return(
    <MovieContext.Provider value={{
      stockMovies,
      movies,
      searchMovies,
      searchShows,
      handleChange,
      handleSubmit,
    }} >
      {props.children}
    </MovieContext.Provider>
  )
}

export {MovieContext, MovieContextProvider}