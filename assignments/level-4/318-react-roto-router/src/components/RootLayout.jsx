import {Outlet} from "react-router-dom"
import Nav from "./Nav.jsx"
import Footer from "./Footer.jsx"

export default function RootLayout(){
  return(
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  )
}