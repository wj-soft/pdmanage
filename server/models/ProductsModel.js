
/*eslint-disable */
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const autoIncrement = require('mongoose-auto-increment')

// 생성될 필드명을 정한다

const ProductsSchema = new Schema({
  pk: String,
  price: Number,
  purchaseDate: Date,
  depreciation: Number,
  description: String,
  comment: Array,
  created_at: {
    type: Date,
    default: Date.now()
  }
});

// ProductsSchema.plugin(autoIncrement.plugin, { model: 'products', field: 'id', startAt: 1 })
module.exports = mongoose.model('products', ProductsSchema)

