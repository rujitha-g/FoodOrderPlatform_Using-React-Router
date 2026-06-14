import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>McDonald's Orders</h2>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/burgers">Burgers</Link>
        <Link to="/fries">Fries</Link>
        <Link to="/drinks">Cold Drinks</Link>
      </div>
    </nav>
  );
}

export default Navbar;