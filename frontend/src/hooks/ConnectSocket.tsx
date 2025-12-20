import { useEffect } from "react";
import { socket } from "../socket";

export default function ConnectSocket() {

  useEffect(() => {
    if(!socket.connected)
    {
    socket.connect()
    console.log("connected");
    return () => {
        socket.disconnect()
    }}
  }, []);
  return (<></>)
}
