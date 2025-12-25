import Group from "../models/GroupModel.js";
import User from "../models/UserModel.js"
import createGroupService from "../services/groupService.js"
export const createGroup = async(groupId) => {
    {
        const group = await createGroupService({groupId});
        return group;
    }
}
const getgroups = async() => {
    const groups =  await Group.find({} , {_id : true , groupName : true});
    return groups;
}
export const getAllgroups = async() => {
    const groups = await getgroups();
    const AllGroups = groups.map(e => ({groupId : e._id.toString() , groupName : e.groupName}));
    //console.log(AllGroups)
    return AllGroups;   
}

export const getAllMessagesFromGroup = async({groupId}) => {
    const group = await Group.findById(groupId);
    if(!group){
        console.log("groupNotFound");
        return;}
    await group.populate('messages');
    return group;
}
export default createGroup;