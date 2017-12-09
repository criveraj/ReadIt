import React from "react";
import Wrapper from "../components/Wrapper";
import BookCard from "../components/BookCard";
import category from "../category.json"
import Title from "../components/Title"


class CategoryDisplay extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      category
    };
  }

//   removeBook = id => {
//     const category = this.state.category.filter(book => book.id !== id);
//     this.setState({category});
//  };

//  saveBook = (id) => {
//   //send book to favorites array//
//   const favBook =   this.state.books.filter(book => book.id === id);

//   const books = this.state.books.filter(book => book.id !== id);
//   this.setState({books});
// };

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


export default CategoryDisplay;
