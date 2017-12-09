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
    {props.items.map(result =>
      <div style={resultStyle}>
      <li className="list-group-item" key={result.id}><strong>Title: </strong>
        {result.volumeInfo.title}
      </li>
      <div>
      <li className="list-group-item" key={result.id}><strong>Author: </strong>
      {result.volumeInfo.authors}
      </li>
      </div>
      <div>
      
      <li className="list-group-item" key={result.id}><strong>Description: </strong>
      {result.volumeInfo.description}
      </li>
      </div>
      <div>
      <img 
      alt=
      {props.title}
      src={result.volumeInfo.imageLinks.thumbnail} />


      </div>
      <div>
      <li className="list-group-item" key={result.id}>
      <a href= {result.saleInfo.buyLink}>
      <strong>Purchase</strong>
      </a>
      </li>
      </div>
      </div>

    )}
  </ul>
  </div>


export default SearchBarResults;
