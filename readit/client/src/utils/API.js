import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/books/v3/lists/names.json";
const APIKEY = "&apikey=7eafbc772d524d1e99c70cc35de0506a";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default { 
  search: function(query) {
    return axios.get(BASEURL + "?" + query + APIKEY);
  }
};
