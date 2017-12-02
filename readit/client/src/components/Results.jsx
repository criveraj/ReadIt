import React from "react";


const Results = props =>

  <ul className="list-group">
    {props.results.map(result =>
      <li className="list-group-item" key={result.id}>
        <button className="btn btn-primary" value="Input" onClick={props.displayCategory}>{result.display_name}</button>
        {/* <a class="btn btn-primary" href="/category/{result.list_name_encoded}" role="button">{result.display_name}</a> */}
      </li>
    )}
  </ul>;

export default Results;
