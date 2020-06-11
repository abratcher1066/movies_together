import React from "react";

import "./NavM.css";
import SearchMovies from "../SearchMovies";

function NavM({ handleSearchChange }) {
  return (
    <div className="navbar-collapse row" id="navbarNav">
    <nav className="navbar ">
   
        <SearchMovies handleSearchChange={handleSearchChange} />
   
    </nav>
    </div>
  );
}
export default NavM;
