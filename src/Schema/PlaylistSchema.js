const mongoose = require("mongoose");

const playlistSchema=new mongoose.Schema({
    name:String,
    type:String,
    active:boolean
})
export default playlistSchema