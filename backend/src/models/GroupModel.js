import mongoose, { Schema } from "mongoose";
const groupSchema = new mongoose.Schema({
    groupName : String,
    users : [{type : Schema.Types.ObjectId , ref : "User"}],
    messages : [{type : Schema.Types.ObjectId , ref : "Message"}],

},
 {timestamp : true,}
)
const Group = mongoose.model("Group" , groupSchema);
export default Group;