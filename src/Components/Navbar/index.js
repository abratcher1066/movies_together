import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Movie Together
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/user"
              className={window.location.pathname === "/user" ? "nav-link active" : "nav-link"}
            >
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/movies"
              className={window.location.pathname === "/movies" ? "nav-link active" : "nav-link"}
            >
              Search
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;


