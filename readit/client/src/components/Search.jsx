import React from "react";
//stateless function component
const Search = props =>
  <form>
    <div className="form-group">
      <label htmlFor="search"></label>
      <input
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        className="form-control"
        placeholder="Search for a Book"
        id="search"
      />
      <button onClick={props.handleFormSubmit} className="btn btn-primary">
        Search
      </button>
    </div>
  </form>;

export default Search;
