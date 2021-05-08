const mongoose=require("mongoose")
const { default: playlistSchema } = require("../Schema/PlaylistSchema")
const Playlist=new mongoose.model("Playlist",playlistSchema);

const reactPlaylist=new Playlist({
    name:"Node Js",
    type:"Front End",
    active:true
})
reactPlaylist.save();
export default reactPlaylist;