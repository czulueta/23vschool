import ProductsList from "./components/ProductsList.jsx"
import Home from "./components/Home.jsx"
import {Routes, Route} from "react-router-dom"
import './App.css'
import JewelryCard from "./components/JewelryCard.jsx"
import ClothingCard from "./components/ClothingCard.jsx"

function App() {
  

  return (
    <>
      <div className="home-container">
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/jewelry/:jewelryId" element={ <JewelryCard /> }/>
          <Route path="/clothing/:clothingId" element={ <ClothingCard /> }/>
        </Routes>
      </div>
    </>
  )
}

export default App
