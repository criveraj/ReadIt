import React from "react";
import "./BookCard.css";
import {BrowserRouter as Router} from 'react-router-dom';

const BookCard = (props) => (
  <Router>
  <div className="card">
    <div className="img-container">
      <img 
        alt={props.title}
        src={props.image}
      />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Title:</strong> <strong>{props.title}</strong>
        </li>
        <li>
          <strong>Author:</strong> {props.author}
        </li>
        <li>
          <strong>Description:</strong> {props.description}
        </li>
        <li><a href= {props.amazonlink} > <strong>See it in Amazon.com</strong> </a></li>
        <li><a href= {props.barneslink} > <strong>See it Barnes and Noble</strong> </a></li>
            
      </ul>
      
      
    </div>
    
  </div>
  </Router>
);

export default BookCard;
