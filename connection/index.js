const mongoose = require("mongoose")
const User  = mongoose.connect("mongodb://127.0.0.1:27017/bitlydatabase")

const urlSchema = new mongoose.Schema({

    shortid: {
        type: String,
        required: true,
        unique: true,
    }
    ,
    urltoredirect: {
        type: String,
        required: true,
        visitedhistory: [{ timestamp: { type: Number } }]
    }},
    { timestamp: true }
)
const URL = mongoose.model("url",urlSchema)
module.exports = {URL,User}