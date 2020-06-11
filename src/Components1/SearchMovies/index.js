import React from "react";
import "../SearchBox/SearchBox.css";

function SearchMovies({ handleSearchChange }) {
  return (
    <div className="searchbox">
      <form className="form-inline">
      <label htmlFor="inputMovieName" className="col-sm-3 col-form-label">Movie</label>
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
export default SearchMovies;