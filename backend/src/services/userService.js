import User from "../models/UserModel.js";
const createUserService = async({userName}) => {
    const user = new User({userName})
    const savedUser = await user.save();
    return savedUser;
}
export default createUserService;