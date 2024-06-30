import HomePage from "./components/HomePage.jsx";
import MoviePage from "./components/MoviePage.jsx";
import TvSeriesPage from "./components/TvSeriesPage.jsx";
import RootLayout from "./components/RootLayout.jsx";
import { createBrowserRouter, RouteProvider, createRoutesFromElements, Route } from "react-router-dom";
import './App.css'
import {loader as movieLoader } from "./DataContext.jsx"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootLayout />} >
    <Route index element={<HomePage />} />
    <Route to="/movies" element={<MoviePage />} loader={movieLoader} />
    <Route to="/series" element={<TvSeriesPage />} />
  </Route>
))

function App() {
  return (
    <RouteProvider router={router} />
  )
}

export default App
