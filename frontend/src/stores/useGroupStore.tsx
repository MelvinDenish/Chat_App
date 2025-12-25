import {create} from "zustand"

type useGroupType = {
    groupId  : string,
    groupName : string,
    setGroupId : (groupId : string) => void,
    setGroupName : (groupName : string) => void 
}
const useGroupStore = create<useGroupType>((set) => ({
    groupId : "" ,
    groupName : "" ,
    setGroupId : (groupId : string ) => {set({groupId})},
    setGroupName : (groupName : string) => {set({groupName})},

}))
export default useGroupStore;