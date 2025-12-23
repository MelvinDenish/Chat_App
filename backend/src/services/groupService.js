import User from "../models/UserModel"
import Group from "../models/GroupModel"
const createGroupService = async ({groupId}) => {
    const group = new Group({groupName:groupId});
    const res = await group.save();
    return res;
}
export default createGroupService;