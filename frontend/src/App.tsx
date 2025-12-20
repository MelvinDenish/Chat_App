import { useEffect, useState } from "react"
import SearchBar from "./components/SearchBar.js"
import {socket} from "./socket"
import ConnectSocket from "./hooks/ConnectSocket.js";
import Message from "./components/Message.js";
import "./index.css"
export interface messageType {
  message : string;
  user ?: string
}
function App() {
  const [messages , setMessages] = useState<Array<messageType>>([]);
  socket.on("receive_message" , (message) => {
  setMessages([...messages , {message , user:socket.id}])
  })
  return (
    <div className="max-h-full h-screen w-screen">
      <ConnectSocket/>
      <div className="bg-(--bg-dark) h-full w-full max-w-full flex">
        <div className="flex-1 m-3 rounded-2xl bg-(--bg) border border-[hsl(266,10%,60%)]">
          <div className="p-4 text-(--text-primary) text-xl font-semibold border-solid">
            GROUPS

          </div>
        </div>
        <div className="flex flex-col bg-(--bg-light) hover:bg-(--bg-light) flex-1 rounded-2xl m-3  border border-[hsl(221,10%,50%)]">
            <div className="flex-col flex-1  p-4 flex overflow-y-auto">
                <div className=" flex-1 overflow-y-auto">
                  {
                    messages.map((value , key) => (
                      <div id={key.toString()} className="flex p-5">
                        <Message key={key} messages={value}/>
                        <br/>
                      </div>
                    ))
                  }
                  </div>
                <div className="w-full sticky bottom-0">
                <SearchBar  />
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App