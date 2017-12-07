import React from "react";

const SearchBarResults = props =>
  <ul className="list-group">
    {props.results.map(result =>
      <li className="list-group-item" key={result.id}>
        {result.title}
      </li>
    )}
  </ul>;

export default SearchBarResults;
