const { Schema } = require("mongoose");

const personSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    favoriteFoods: [String]
})

module.exports = personSchema