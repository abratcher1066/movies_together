import React from "react";

function SearchForm(props) {
  return (
    <div className="container">
    <div className="row justify-content-md-center">
    <form className="form-inline">
      <div className="form-group row">
        <label htmlFor="search" className="col-sm-4 col-form-label">Movies or Shows:</label>
        <div className="col-sm-6">
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Movies or Shows name"
          id="search"
        />
        </div>
        </div>
          <div className="form-group row">
          <div className="col-sm-6">
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button>
      </div>
      </div>
    </form>
    </div>
    </div>
  );
}

export default SearchForm;