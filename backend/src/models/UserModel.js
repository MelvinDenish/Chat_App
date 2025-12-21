import mongoose from "mongoose"
const userSchema = mongoose.Schema({
    userName : String,
    userId : Number,
},{
    timestamp : true,
}
)
const User = mongoose.model("User" , userSchema);
export default User;