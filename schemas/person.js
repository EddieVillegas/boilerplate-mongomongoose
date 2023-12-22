const { Schema } = require("mongoose");

const personSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    favoriteFoods: {
        type: [String],
        required: true
    }
})

module.exports = personSchema