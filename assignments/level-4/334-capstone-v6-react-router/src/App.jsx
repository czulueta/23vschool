import {BrowserRouter, Routes, Route} from "react-router-dom"
import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import MoviesList from "./components/MoviesList.jsx";
import Heading from "./components/Heading.jsx";
import SearchBox from "./components/SearchBox.jsx";
import './App.css'

export default function App() {
  

  return (
    <BrowserRouter>
        <Navbar /> 
      <div className="heading">
        <Heading /> 
        <SearchBox />   
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movies" element={<MoviesList />} />
        <Route />
      </Routes>
    </BrowserRouter>
  )
}


