import "./NavBar.css"
import { Link } from "react-router-dom";

export default function NavBar(){
  return(
    <nav className="navbar">
      <ul className="navbar__list">
        <li><Link to="/rankings"  className="navbar__link">Rankings</Link></li>
        <li><Link to="/" className="navbar__link">Play a round</Link></li>
        <li><Link to="/credits" className="navbar__link">Credits</Link></li>
      </ul>
    </nav>
  )
}