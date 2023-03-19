const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
  firstName: {
    type: String,
  },
  summary: {
    type: String
  },
  isbn: {
    type: String
  },
  genres: {
    type: [String]
  },
  date: {
    type: String
  }
})

const AuthorsSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  secondName: {
    type: String    
  },  
  dateBirth: {
    type: String
  },
  dateDeath: {
    type: String
  }
})


const Author = mongoose.model("Authors", AuthorsSchema);
const Books = mongoose.model("Books", BookSchema);

module.exports = {
  Books,
  Author
}