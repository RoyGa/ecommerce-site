const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    shoppingcart: {
        type: [mongoose.Schema.Types.ObjectId]
    }
});

module.exports = mongoose.model('User', User);