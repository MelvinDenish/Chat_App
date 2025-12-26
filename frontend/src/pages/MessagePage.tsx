import React, { useEffect, useState } from 'react'
import GroupsPanel from '../components/GroupsPanel'
import MessagesPanel from '../components/MessagesPanel'
import { socket } from '../socket'
import { useNavigate, useParams } from 'react-router'
import useGroupsStore from '../stores/useGroupsStore'
import { useUserStore } from '../stores/useUserStore'
import useSocketStore from '../stores/socketStore'
function MessagePage() {
  const userName = useUserStore(state => state.userName);
  const navigate = useNavigate();
  useEffect(()=> {
    if(userName === "")
    {
      navigate("/");
    }
  })
  return (
        <div className="bg-(--bg-dark) flex-wrap flex-40 flex">
        <GroupsPanel/>
        <MessagesPanel/>
      </div>
  )
}

export default MessagePage
