import React, { useState } from 'react'
import Group from './Group'
import useSocketStore, { type chatMessage } from '../stores/socketStore';
function GroupsPanel() {
  const [groups , setGroups] = useState<Array<string>>(["group1" , "wiryv"]);  
  return (
      <div className="flex flex-col flex-1 m-3 rounded-2xl bg-(--bg) border border-[hsl(266,10%,60%)]">
          <div className="p-4 text-(--text-primary) text-xl font-semibold border-solid">
            GROUPS
          </div>
          
          <div>
            {
              groups.map((value , key) => (
                <Group key={key} groupid={value}/>
              ))
            }
          </div>
        </div>
    
  )
}

export default GroupsPanel

