const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Product = new Schema({
    product_title: {
        type: String
    },
    product_id: {
        type: Number
    },
    product_price: {
        type: Number
    },
    product_brand: {
        type: String
    }
});

module.exports = mongoose.model('Product', Product);