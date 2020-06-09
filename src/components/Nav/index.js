import React from "react";
import SearchBox from "../SearchBox";
import "./Nav.css";

function Nav({ handleSearchChange }) {
  return (
    <div className="navbar-collapse row" id="navbarNav">
    <nav className="navbar ">
   
        <SearchBox handleSearchChange={handleSearchChange} />
   
    </nav>
    </div>
  );
}
export default Nav;
