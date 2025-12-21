import mongoose, { Schema } from "mongoose";
const groupSchema = mongoose.Schema({
    groupid : String,
    groupName : String,
    users : [{type : Schema.Types.ObjectId , ref : "User"}],
    messages : [{type : Schema.Types.ObjectId , ref : "Message"}],

}, {timestamp : true,}
)
const Group = mongoose.model("Group" , groupSchema)