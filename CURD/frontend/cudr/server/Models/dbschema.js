const mongoose = require("mongoose")
const { addListener } = require("nodemon")

const schema = new mongoose.Schema({
    name:
    {
        type: String,
        required: true
    },
    redgno:
    {
        type: Number,
        required: true
    },
    email:
    {
        type: String,
        required: true
    },
    mob:
    {
        type: Number,
        required: true
    },
    dob:
    {
        type: Date,
    },
    gender:
    {
        type: String
    },
    hobbies: {
        type: Array
    },
    branch: {
        type: String
    },
    password: {
        type: String
    }
})
const user = mongoose.model("studdatas", schema)
module.exports = user;