import React from 'react'
import GroupsPanel from '../components/GroupsPanel'
import MessagesPanel from '../components/MessagesPanel'
function MessagePage() {
  return (
        <div className="bg-(--bg-dark) flex-wrap flex-40 flex">
        <GroupsPanel/>
        <MessagesPanel/>
      </div>
  )
}

export default MessagePage
