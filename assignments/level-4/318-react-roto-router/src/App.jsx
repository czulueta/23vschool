import {createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from "react-router-dom"
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import Services from "./components/Services.jsx"
import ServicePage from "./components/ServicePage.jsx"
import RootLayout from "./components/RootLayout.jsx"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootLayout />} >
    <Route index element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/services/:serviceId" element={<ServicePage />} />
  </Route>
))

export default function App(){
  return(
    <RouterProvider router={router} />
  )
}