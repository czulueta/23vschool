import {useState} from "react"
import axios from "axios";
// import {useLoaderData} from "react-router-dom"

const DataContext = React.createContext();

function DataContextProvider(props){

  const [movies, setMovies] = useState({
    Title: "",
    Year: "",
    imdbID: "",
    Type: "",
    
  });

  
  const [series, setSeries] = useState([])
  return(
    <DataContext.Provider value={{

    }}>
      {props.children}
    </DataContext.Provider>
  )
}

export {DataContext, DataContextProvider}
