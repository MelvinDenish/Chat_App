import { useRef, useState, type SetStateAction } from "react";
import { socket } from "../socket";
import type { messageType } from "../App";

type propType = {
  setMessages :SetStateAction<messageType[]>;
}
export default function SearchBar() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [message, setMessage] = useState<string>("");

  const sendMessage = () => {
    if (!inputRef.current) return;
    const value = inputRef.current.value;
    setMessage(value);
    socket.emit("send_message" , value)
    inputRef.current.value = ""; // clear input

  };

  return (
    <div className="flex h-[6vh] w-full items-center">
      <div className="p-4 w-full">
        <input
          ref={inputRef}
          className="border-2  border-solid border-[#111] w-full rounded-2xl p-2 bg-[#343434] text-[#f1f1f1]"
          type="text"
        />
      </div>

      <div className="flex justify-center rounded-2xl bg-black text-[#f1f1f1] p-2 px-4">
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
