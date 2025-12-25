import mongoose, { Schema } from "mongoose";
const groupSchema = new mongoose.Schema({
    groupName : String,
    messages : [{type : Schema.Types.ObjectId , ref : "Message"}],
},
 {timestamp : true,}
)
const Group = mongoose.model("Group" , groupSchema);
export default Group;