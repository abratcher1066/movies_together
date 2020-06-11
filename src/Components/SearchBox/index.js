import React from "react";
import "./SearchBox.css";

function SearchBox({ handleSearchChange }) {
  return (
    <div className="searchbox">
       
      <form className="form-inline">
      <label htmlFor="inputUserName" className="col-sm-4 col-form-label">Username</label>
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={e => handleSearchChange(e)}
        />
      </form>
    </div>
  );
}
export default SearchBox;