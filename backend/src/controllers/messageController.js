import Message from "../models/MessageModel.js";
import createMessageService from "../services/messageService.js";

export const createMessageOfGroup = async({userId , messagedata , group}) => {
    const message =  await createMessageService({userId , messagedata , group});
    return message;
}
