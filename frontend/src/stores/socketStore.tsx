import { create } from 'zustand'
import { socket } from '../socket'

export type chatMessage = {
    message : string,
    sender ?: string,
}

type storeType = {
    activeGroupId : string | null,
    isConnected : boolean,
    groupMessages : Record<string , chatMessage[]>,
    joinGroup : (groupId : string) => void,
    leaveGroup : () => void,
    connect : () => void,
    disconnect : () => void,
    sendMessage : (data : chatMessage) => void,
    // sendIsSendingMessage : (data) => void
}
const useSocketStore = create <storeType>((set , get) => (
    {
        userName : "",
        isConnected : false,
        activeGroupId : null,
        groupMessages : {},
        connect : () => {
            socket.connect()
        },
        leaveGroup : ()=>{
            const {activeGroupId} = get();
            if(!activeGroupId)return;
            socket.emit("leave-room",activeGroupId);
            console.log(`left group ${activeGroupId}`);
            set({activeGroupId : null})
        },
        joinGroup : (groupId) => {
            const {activeGroupId} = get();
            if(activeGroupId === groupId)return;
            if(activeGroupId)
            {
                socket.emit("leave-room" , activeGroupId);
                console.log(`left group ${activeGroupId}`);
            }
            socket.emit("join-room" , groupId);
            set({activeGroupId : groupId});
            console.log(`joined group ${groupId}`);
        },
        disconnect : () => {
            socket.disconnect();
        },

        sendMessage : (data) => {
            const { activeGroupId } = get()
            if(!activeGroupId)return;
            socket.emit("send-message" , {
                messagedata : data,
                groupId : activeGroupId,
            })
        },
    }
))
export default useSocketStore;