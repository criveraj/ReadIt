import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=0b6b94b962e84522a246003712577792&title=";
const APIKEY = "";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query);
  }
};
