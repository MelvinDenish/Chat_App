import User from "../models/UserModel"
import createGroupService from "../services/groupService"
const createGroup = async(groupId) => {
    {
        const group = await createGroupService({groupId});
        return group;
    }
}

export default createGroup;