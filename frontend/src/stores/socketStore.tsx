import { create } from 'zustand'
import { socket } from '../socket'
import { useUserStore } from './useUserStore'

export type messsageType = {
    userName : string,
    userId : string,
    messageData : string,
}
type storeType = {
    activeGroupId : string | null,
    activeGroupName : string,
    isConnected : boolean,
    groupMessages : Array<messsageType>,
    joinGroup : (groupId : string , groupName : string) => void,
    leaveGroup : () => void,
    connect : () => void,
    disconnect : () => void,
    sendMessage : (message : string) => void,
    // sendIsSendingMessage : (data) => void
}
const useSocketStore = create <storeType>((set , get) => (
    {
        isConnected : false,
        activeGroupId : null,
        activeGroupName : "",
        groupMessages : [],
        connect : () => {
            socket.connect();
        },
        leaveGroup : ()=>{
            const {activeGroupId} = get();
            if(!activeGroupId)return;
            socket.emit("leaveGroup",activeGroupId);
            console.log(`left group ${activeGroupId}`);
            set({activeGroupId : null , activeGroupName : "" , groupMessages : []})
        },
        joinGroup : (groupId , groupName) => {
            
            const {activeGroupId} = get();
            if(activeGroupId === groupId)return;
            if(activeGroupId)
            {
            socket.emit("leaveGroup",activeGroupId);
            console.log(`left group ${activeGroupId}`);
            set({activeGroupId : null , activeGroupName : "" , groupMessages : []})

            }
            socket.emit("joinGroup" , groupId);
            socket.on("getAllMessages" , ({messages}) => {
                set({groupMessages : messages})
            })
            set({activeGroupId : groupId , activeGroupName : groupName});
            console.log(`joined group ${groupId}`);
        },
        disconnect : () => {
            socket.disconnect();
        },

        sendMessage : (messageData) => {
            const {userId , userName} = useUserStore.getState();
            const { activeGroupId } = get();
            if(!activeGroupId)return;
            socket.emit("sendMessage" , {
                userId,
                userName,
                messageData,
                groupId : activeGroupId,
            })  
        },
    }
))
export default useSocketStore;