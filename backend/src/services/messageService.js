import Group from "../models/GroupModel.js";
import Message from "../models/MessageModel.js";

const createMessageService = async({userId , messageData , groupId}) => {
    console.log("user id : " +  userId , " msg : " +  messageData , " group :  " +  groupId);
    const message = new Message({
        user : userId,
        message : messageData,
    })
    const savedMessage = await message.save();
    if(!groupId){
        console.log("group not exisits in create message service ");return;
    }
    await Group.findByIdAndUpdate(groupId , {$push : {messages: message._id}})
    await savedMessage.populate('user')
    return savedMessage;
}

export default createMessageService;