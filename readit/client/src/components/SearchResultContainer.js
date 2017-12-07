import React from "react";
import Search from "./Search.jsx";
import Results from "./Results.jsx";
import API from "../utils/API.js";

class SearchResultContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      search: "",
      results: []
    };
  }
   // When this component mounts, search the API 
   componentDidMount() {
    this.searchCategories("");
  }

  searchCategories(query) {
    //TODo: look into adding data into localStorage
    API.search(query)
      .then(res => {
        this.setState({ results: res.data.results })
        console.log(this.state.results);
      })
      .catch(err => console.log(err));
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit(event) {
    event.preventDefault();
    this.searchCategories(this.state.search);
  };

  render() {
    return (
      <div>
       {/* <Search
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        /> */}
        <Results results={this.state.results}/>
      </div>
    );
  }
}

export default SearchResultContainer;