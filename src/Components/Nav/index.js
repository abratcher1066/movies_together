import React from "react";
//import SearchBox from "../SearchBox";
import "./Nav.css";
import MainContainer from "../MainContainer";

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
