import {mongoose} from "mongoose";
import dotenv from "dotenv"
dotenv.config();
const mongo_uri = process.env.MONGO_URI
export const connectDB = async() => {
    await mongoose.connect(mongo_uri);
    console.log("connected db");
}