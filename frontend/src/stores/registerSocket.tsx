import { socket } from "../socket";
import useSocketStore, { type messageType } from "./socketStore";

export const registerSocket = () => {
    socket.on("connect", () => {
        useSocketStore.setState({ isConnected: true })
    })
    socket.on("disconnect", () => {
        useSocketStore.setState({ isConnected: false })
    })
    socket.on("receiveMessage", (data: messageType) => {
        console.log("data : " + data.messageData + "\t" + data.userId)
        useSocketStore.setState(state => (
            {
                groupMessages: [...state.groupMessages, data]
            }
        ));
    })

}
