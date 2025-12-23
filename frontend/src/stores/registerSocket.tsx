import { socket } from "../socket";
import useSocketStore, { type chatMessage } from "./socketStore";

export const registerSocket = () => {
    socket.on("connect" ,  () => {
        useSocketStore.setState({isConnected : true})
    })
    socket.on("registerUser" , ()=> {
        
    })
    socket.on("disconnect" , () => {
        useSocketStore.setState({isConnected : false})
    })
    socket.on("receive-message" , (data : chatMessage & {groupId : string}) => {
        console.log("data : " + data.message + "\t" + data.sender + "\tgroup : " + data.groupId)
        useSocketStore.setState(state => (
            {
                groupMessages : {
                    ...state.groupMessages , [data.groupId] : [...(state.groupMessages[data.groupId] || [])   , data]
                }
            }
         ));
    })
}
