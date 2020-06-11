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
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/Home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/User"
              className={window.location.pathname === "/User" ? "nav-link active" : "nav-link"}
            >
              User
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Movies"
              className={window.location.pathname === "/Movies" ? "nav-link active" : "nav-link"}
            >
              Movie
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Register"
              className={window.location.pathname === "/Register" ? "nav-link active" : "nav-link"}
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;


