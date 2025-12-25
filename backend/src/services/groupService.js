import Group from "../models/GroupModel.js"
const createGroupService = async ({groupId}) => {
    const group = new Group({groupName:groupId});
    const res = await group.save();
    
    return res;
}
export default createGroupService;