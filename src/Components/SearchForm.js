import React from "react";

function SearchForm(props) {
  return (
    <div className="container">
    <div className="row justify-content-md-center">
    <form className="form-inline">
         <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Movies or Shows name"
          id="search"
        />
          <div className="col-sm-4">
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
    </div>
    </div>
  );
}

export default SearchForm;