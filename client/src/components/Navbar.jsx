import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import homeblack from "../assets/icons/homeblackicon.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <div className="nav-name">
          <Link to="/">InfoVault</Link>
        </div>
      </div>

      <div className="navbar-links">
        <NavLink to="/" end>
          <div className="icon-container"><img className="icon" src={homeblack} /></div>
          <div className="non-icon">Home</div>
        </NavLink>

        <NavLink to="/mainlist">
          <div className="icon-container"><img className="icon" src={homeblack} /></div>
          <div className="non-icon">Main-List</div>
        </NavLink>

        <NavLink to="/mainlist/getInfo">
          <div className="icon-container"><img className="icon" src={homeblack} /></div>
          <div className="non-icon">Info</div>
        </NavLink>

        <NavLink to="/mainlist/news">
          <div className="icon-container"><img className="icon" src={homeblack} /></div>
          <div className="non-icon">News</div>
        </NavLink>

        <NavLink to="/mainlist/DocEvPage">
          <div className="icon-container"><img className="icon" src={homeblack} /></div>
          <div className="non-icon">Doc Evaluate</div>
        </NavLink>

        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}