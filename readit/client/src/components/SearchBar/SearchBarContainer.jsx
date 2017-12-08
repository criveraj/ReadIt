import React from "react";
import SearchBar from "./SearchBar.jsx";
import SearchBarResults from "./SearchBarResults.jsx";
import SearchBarAPI from "./utils/SearchBarAPI.jsx";

class SearchBarContainer extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      items: []
    };
  };
  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.searchBestSeller("heartless");
  };

  searchBestSeller(query) {
    SearchBarAPI.search(query)
      .then(res => {
        this.setState({ items: res.data.items })
        console.log(this.state.items);
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
   
        <SearchBarResults items={this.state.items} />
      </div>
    );
  }
}

export default SearchBarContainer;
