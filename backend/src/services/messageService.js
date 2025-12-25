import Group from "../models/GroupModel.js";
import Message from "../models/MessageModel.js";

const createMessageService = async({userId , messagedata , group}) => {
    const message = new Message({
        user : userId,
        message : messagedata,
    })
    const savedMessage = await message.save();
    if(!group){
        console.log("group not exisits in create message service ");return;

    }
    await Group.findByIdAndUpdate(group._id , {$push : {messages: message._id}})
    await savedMessage.populate('user')
    return savedMessage;
}

export default createMessageService;