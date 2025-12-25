import {create} from "zustand"
import { socket } from "../socket"
type useGroupsType = {
    groups : Array<{groupName : string , groupId : string}>,
    getAllGroups : () => void,
}
const useGroupsStore = create<useGroupsType>((set) => ({
    groups : [],
    getAllGroups : () => {
        socket.on("getAllGroups" , ({groups}) => {
            set({groups : groups})
        })
    }
}))
export default useGroupsStore;