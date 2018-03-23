
/*eslint-disable */
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const autoIncrement = require('mongoose-auto-increment')

// 생성될 필드명을 정한다

const ProductsSchema = new Schema({
  name: String,
  price: Number,
  description: String,
  created_at: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('products', ProductsSchema)

