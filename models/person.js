const { model } = require("mongoose")
const personSchema = require("../schemas/person")
module.exports = model("Person", personSchema) 