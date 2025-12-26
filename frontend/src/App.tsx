import { useEffect, useState } from "react"
import MessageBar from "./components/MessageBar.js"
import {socket} from "./socket"
import ConnectSocket from "./hooks/ConnectSocket.js";
import Message from "./components/Message.js";
import "./index.css"
import Group from "./components/Group.js";
import GroupsPanel from "./components/GroupsPanel.js";
import MessagesPanel from "./components/MessagesPanel.js";
import { registerSocket } from "./stores/registerSocket.js";
import { IoIosAddCircle } from "react-icons/io";
import useSocketStore from "./stores/socketStore.js";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import MessagePage from "./pages/MessagePage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import AddGroupPage from "./pages/AddGroupPage.tsx";
import { useUserStore } from "./stores/useUserStore.tsx";

function App() {
  
  const connect = useSocketStore(state => state.connect);
  const userName = useUserStore(state => state.userName);
  const navigate = useNavigate();
  const handleAddGroup = () => {
    if(!userName){return;}
    navigate("/addgroup")
  }
  useEffect(() => {
    registerSocket();
    connect();
    
  }
  , [])
  return (
    <div className="max-h-full flex flex-col font-mono h-screen bg-(--bg-dark)">
      <ConnectSocket/>
      <div className="flex flex-1  p-4 mt-2 ml-3 mr-3 justify-center bg-(--bg-light) rounded-2xl border border-[hsl(0,0%,50%)]">
          <div className="flex flex-1 text-2xl font-semibold  font-serif">
          CHAT APP
          </div>
        <IoIosAddCircle size={30} onClick={handleAddGroup} />
        <div>
          </div>
      </div>
      <Routes>
        
        <Route path="/" element={<LoginPage/>}></Route>
        <Route path="/messages" element={<MessagePage/>}></Route> 
        <Route path="/addgroup" element={<AddGroupPage/>}/> 
      </Routes>
    </div>
  )
}

export default App