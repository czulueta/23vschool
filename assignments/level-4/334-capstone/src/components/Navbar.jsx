import { Link } from "react-router-dom";

export default function Navbar(){
  return(
    <nav>
      <ul>
        <Link to="/" >
          <h2>Home</h2>
        </Link>
        <Link to="/movies">
          <h2>Movies</h2>
        </Link>
        <Link to="/series">
          <h2>TV Series</h2>
        </Link>
      </ul>
    </nav>
  )
}