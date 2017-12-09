// Require mongoose
var mongoose = require("mongoose");
// Schema class with Mongoose
var Schema = mongoose.Schema;

// Book schema
var BookSchema = new Schema({
   title: {
    type: String,
    required: true
  },
  
  author: {
    type: String,
    required: true
  },

  description: {
    type: string,
    required: true
  },
  
  saved:{
    type: Boolean,
    required: true
  }
 
});

//  Book model with the BookSchema
var Book = mongoose.model("Book", BookSchema);

// Export the model
module.exports = Book;