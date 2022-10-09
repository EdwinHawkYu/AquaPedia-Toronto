const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
  name: {type: String},
  level: {type: String},
  location: {type: String},
  price: {type: Number},
  date: {type: Date}
},
  {
  timestamps: true
  }
)

module.exports = mongoose.model("Post", postSchema)