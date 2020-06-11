import React from "react";

import "./Nav.css";
import SearchBox from "../SearchBox";

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
