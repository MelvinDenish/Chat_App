import React, { useRef } from 'react'
import { socket } from '../socket';
import useGroupStore from '../stores/useGroupStore';
import { useNavigate } from 'react-router';

function AddGroupPage() {

  const inputRef = useRef<HTMLInputElement | null>(null);
  const setGroupName = useGroupStore(state => state.setGroupName);
  const setGroupId = useGroupStore(state => state.setGroupId);
  const navigate = useNavigate();
  const handleClick = () => {
    if(!inputRef.current || !inputRef.current.value || !inputRef.current.value.trim()){return;}
    const groupName = inputRef.current.value.trim();
    socket.emit("createGroup" , {groupName})
    socket.on("getNewlyAddedGroup" , ({groupId , groupName}) => {setGroupName(groupName) , setGroupId(groupId)})
    
    navigate("/messages");
  }
  return (
    <div className='flex-40 bg-(--bg-dark) flex flex-wrap justify-center items-center'>
      <div className='bg-(--bg-light) rounded-2xl mvb-20 flex  border flex-col justify-center items-center'>

        <div className='flex p-4'>
          <div className='p-4 font-serif'>Group Name : </div>
          <input type="text" className='rounded-2xl outline-0' ref={inputRef}/>
        </div>
        <button className='font-serif p-3  bg-slate-800 m-4 rounded-xl' onClick={handleClick}>
          ENTER
        </button>
        
      </div>
    </div>

  )
}

export default AddGroupPage
