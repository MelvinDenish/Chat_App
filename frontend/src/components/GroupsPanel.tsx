import React, { useEffect, useState } from 'react'
import Group from './Group'
import useSocketStore from '../stores/socketStore';
import { socket } from '../socket';
import useGroupStore from '../stores/useGroupStore';
import useGroupsStore from '../stores/useGroupsStore';
function GroupsPanel() {
  const groups = useGroupsStore(state => state.groups);
  return (
      <div className="flex flex-col flex-1 m-3 rounded-2xl bg-(--bg) border border-[hsl(266,10%,60%)]">
          <div className="p-4 text-(--text-primary) text-xl font-semibold border-solid">
            GROUPS
          </div>
          <div>
            {
              groups && groups.map((value) => (
                <Group key={value.groupId} group={value}/>
              ))
            }
          </div>
        </div>
    
  )
}

export default GroupsPanel

