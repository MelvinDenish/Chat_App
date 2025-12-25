import React, { useEffect } from 'react'
import GroupsPanel from '../components/GroupsPanel'
import MessagesPanel from '../components/MessagesPanel'
import { socket } from '../socket'
import { useParams } from 'react-router'
import useGroupsStore from '../stores/useGroupsStore'
function MessagePage() {
  const getAllGroups = useGroupsStore(state => state.getAllGroups);
  
  return (
        <div className="bg-(--bg-dark) flex-wrap flex-40 flex">
        <GroupsPanel/>
        <MessagesPanel/>
      </div>
  )
}

export default MessagePage
