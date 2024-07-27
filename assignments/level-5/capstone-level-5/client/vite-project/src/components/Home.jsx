import {Link} from "react-router-dom"


export default function Home(){
  return(
    <div>
      <h1>Welcome to the Most Blessed Products</h1>
      <Link to="/products">
      <h2>Products Page</h2>

      </Link>
    </div>
  )
}