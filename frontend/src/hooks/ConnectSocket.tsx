import { useEffect } from "react";
import { socket } from "../socket";

export default function ConnectSocket() {

  useEffect(() => {
    socket.connect()
    console.log("connected");
    return () => {
        socket.disconnect()
    }
  }, []);
  return (<></>)
}
