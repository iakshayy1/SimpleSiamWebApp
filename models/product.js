// Model for product
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var schema = new Schema({
  category: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true }
});

module.exports = mongoose.model("Product", schema);
