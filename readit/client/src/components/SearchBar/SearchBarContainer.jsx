import React from "react";
import SearchBar from "./SearchBar.jsx";
import SearchBarResults from "./SearchBarResults.jsx";
import SearchBarAPI from "./utils/SearchBarAPI.jsx";

class SearchBarContainer extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      results: []
    };
  };
  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.searchBestSeller("kite");
  };

  searchBestSeller(query) {
    SearchBarAPI.search(query)
      .then(res => {
        this.setState({ results: res.data.results })
        console.log(this.state.results);
      })
      .catch(err => console.log(err));
  };

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit(event) {
    event.preventDefault();
    this.searchBestSeller(this.state.search);
  };

  render() {
    return (
      <div>
          <SearchBar
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit.bind(this)}
          handleInputChange={this.handleInputChange.bind(this)}
        />
   
        <SearchBarResults results={this.state.results} />
      </div>
    );
  }
}

export default SearchBarContainer;
