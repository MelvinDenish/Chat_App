import MessageBar from './MessageBar'
import Message from './Message'
import useSocketStore from '../stores/socketStore';
import { useUserStore } from '../stores/useUserStore';
function MessagesPanel() {
  const userName = useUserStore(state => state.userName);
  const state = useSocketStore(state => state);
  const activeGroupId : string | null = state.activeGroupId;
  const activeGroupName : string = state.activeGroupName;
  const groupMessages = useSocketStore(state => state.groupMessages);
  
return (
      <div className="flex flex-col bg-(--bg-light) hover:bg-(--bg-light) flex-4 rounded-2xl m-3  border border-[hsl(221,10%,50%)]">
            <div className="flex-col flex-1  p-4 flex overflow-y-auto">
                <div className=" flex-1 overflow-y-auto ">
                  <div className='flex  justify-center self-end text-2xl font-bold font-serif'>
                      <div className='flex-1'>
                      {
                        activeGroupId === null ? 
                        <>Enter any group</> : <>{activeGroupName}</>
                      }
                      </div>
                      <div>
                      username: {userName}
                      </div>
                  </div>
                      {activeGroupId && (<> {
                        groupMessages === null ? <>
                        NO Messages
                        </> : 
                        groupMessages.map((value , key) => (
                          <div className="flex p-5">
                            <Message key={key} data={value}/>
                            <br/>
                          </div>
                        ))}
                      </>)
                      }
                  </div>
                <div className="w-full sticky bottom-0">
                {
                  activeGroupId  ?
                  <MessageBar  /> : <></>
                }
              </div>
          </div>
        </div>
  )
}

export default MessagesPanel
