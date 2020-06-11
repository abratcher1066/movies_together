import React from "react";


import "./Nav.css";
import MainContainer from "../MainContainer";
=======

import "./Nav.css";
import SearchBox from "../SearchBox";


function Nav({ handleSearchChange }) {
  return (
    <div className="navbar-collapse row" id="navbarNav">
    <nav className="navbar ">
        <MainContainer />
    </nav>
    </div>
  );
}
export default Nav;
