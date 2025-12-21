import mongoose, { Schema } from "mongoose";
const messageSchema = mongoose.Schema({
    user : {type : Schema.Types.ObjectId , ref : "User"},
    message : String,
}
,{
    timestamps : true,
})
const Message = mongoose.model("Message" , messageSchema);