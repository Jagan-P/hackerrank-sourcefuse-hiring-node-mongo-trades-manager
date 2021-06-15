// Uncomment the code below to use Sequelize ORM
// const {Sequelize} = require("sequelize");
// const sequelize = new Sequelize("sqlite::memory:");

// Uncomment the code below to use Mongoose ORM
const mongoose = require('mongoose');
// Insert your model definition below
const tradeModel = mongoose.model('trades', {
    "id": {
        type: Number,
        required: true
    },
    "type": {
        type: String,
        enum : ['buy','sell']
    },
    "user_id": {
        type: Number,
        required: true
    },
    "symbol": {
        type: String
    },
    "shares": {
        type: Number,
        min: 1,
        max: 100
    },
    "price": {
        type: Number
    },
    "timestamp": {
        type: Number
    }
})

module.exports = tradeModel;
