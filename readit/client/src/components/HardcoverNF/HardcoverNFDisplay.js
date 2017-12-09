import React from "react";
import Wrapper from "../Wrapper";
import BookCard from "../BookCard";
import category from "../HardcoverNF/category.json"
import Title from "../Title"


class HardcoverNFDisplay extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      category
    };
  }

  render() {
    return (
      <Wrapper>
           <Title>{this.state.category.results.list_name}</Title>   
            {this.state.category.results.books.map((book, i)=>
              <BookCard 
                saveBook={this.saveBook}
                key = {i}
                title= {book.title}
                image = {book.book_image}
                author = {book.author}
                description = {book.description}
                amazonlink={book.amazon_product_url}
                barneslink={book.buy_links[1].url}
              />
            )
          }
         
      </Wrapper>
    )
  }
}


export default HardcoverNFDisplay;
