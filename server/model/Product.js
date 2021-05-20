const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Product = new Schema({
  product_name: {
    type: String
  },
 product_producer: {
    type: String
  },
  product_price: {
    type: Number
  },
  product_description: {
          type: String
  },
  product_image: {
    type: String
  }
},{
  collection: 'products'
})


module.exports = mongoose.model('Product', Product)

