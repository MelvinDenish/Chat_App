import { useRef, useState } from "react";
import { socket } from "../socket";
import useSocketStore from "../stores/socketStore";

export default function MessageBar() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [message, setMessage] = useState<string>("");
  const sendMessage = useSocketStore(state => state.sendMessage);

  const inputHandler = () => {
    if (!inputRef.current || !inputRef.current.value) return;
    const value : string = inputRef.current.value;
    setMessage(value);
    sendMessage(value);
    inputRef.current.value = "";
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
        <button onClick={inputHandler}>Send</button>
      </div>
    </div>
  );
}
