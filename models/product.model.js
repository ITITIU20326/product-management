const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  discountPercentage: Number,
  rating: Number,
  stock: Number,
  category: String,
  thumbnail: String,
  status: String,
  deleted: Boolean,
  position: Number,
});
const Product = mongoose.model("Product", productSchema, "products");

module.exports = Product;
