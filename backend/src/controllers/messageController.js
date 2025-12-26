import Message from "../models/MessageModel.js";
import createMessageService from "../services/messageService.js";

export const createMessageOfGroup = async({userId , messageData , groupId}) => {
    const message =  await createMessageService({userId , messageData , groupId});
    return message;
}
