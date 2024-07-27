import React, {useState, useEffect} from "react"
import axios from "axios"

const ShopContext = React.createContext()

function ShopContextProvider(props){
  const [clothing, setClothing] = useState([])
  const [jewelry, setJewelry] = useState([])

  function getJewelry(){
    axios.get("/api/jewelry")
      .then(res => setJewelry(res.data))
      .catch(err => console.log(err))
  }

  function getClothing(){
    axios.get("/api/clothing")
      .then(res => setClothing(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getJewelry()
    getClothing()
  },[])

  return(
    <ShopContext.Provider value={{
      clothing,
      jewelry
    }}>
      {props.children}
    </ShopContext.Provider>
  )
}

export {ShopContext, ShopContextProvider}
