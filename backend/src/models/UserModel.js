import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    userName : String,
},{
    timestamp : true,
}
)
const User = mongoose.model("User" , userSchema);
export default User;