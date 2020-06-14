import React from "react";

function SearchForm(props) {
  return (
    <div className="container">
      <form className="form-inline md-form mr-4 mb-4">
         <input class="form-control mr-sm-2"
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          placeholder="Movies or Shows name"
          id="search"
        />
       
        <button onClick={props.handleFormSubmit} className="btn btn-primary ">
          Search
        </button>
      </form>
    </div>
   
  );
}

export default SearchForm;