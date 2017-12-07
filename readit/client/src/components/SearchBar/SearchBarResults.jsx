import React from "react";
import style from './styles/index.css';

var Style = {
  background: "#eee",
  padding: "20px",
  margin: "20px",

};

var resultStyle ={
  color: "purple",
  border: "1px solid green",
}

const SearchBarResults = props =>
<div style={Style} >
  <ul className="list-group">
    {props.results.map(result =>
      <div style={resultStyle}>
      <li className="list-group-item" key={result.id}>
        {result.title}
      </li>
      </div>
    )}
  </ul>
  </div>


export default SearchBarResults;
