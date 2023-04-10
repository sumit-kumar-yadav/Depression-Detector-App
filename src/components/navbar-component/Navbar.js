import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar(props) {
  return (
    <nav className="nav">
      <div className="left-div">
        <Link to="/">
          <img src="" style={{ width: 50 }} alt="logo" />
        </Link>
      </div>

      <div className="right-nav">
        <div className="nav-links">
          <ul>
            <li>
              <Link to="/login">Log in</Link>
            </li>
            <li>
              <Link to="/logout">Log out</Link>
            </li>
            <li>
              <Link to="/signup">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
