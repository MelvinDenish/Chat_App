import MessageBar from './MessageBar'
import Message from './Message'
import type { chatMessage } from '../stores/socketStore';
import useSocketStore from '../stores/socketStore';
import { useUserStore } from '../stores/userStore';
function MessagesPanel() {
  const userName = useUserStore(state => state.userName);
  const state = useSocketStore(state => state);
  const activeGroup : string | null = state.activeGroupId;
  const messages: chatMessage[] | null = activeGroup == null ? null :state.groupMessages[activeGroup] || null;
return (
      <div className="flex flex-col bg-(--bg-light) hover:bg-(--bg-light) flex-4 rounded-2xl m-3  border border-[hsl(221,10%,50%)]">
            <div className="flex-col flex-1  p-4 flex overflow-y-auto">
                <div className=" flex-1 overflow-y-auto ">
                  <div className='flex  justify-center self-end text-2xl font-bold font-serif'>
                      <div className='flex-1'>
                      {
                        activeGroup === null ? 
                        <>Enter any group</> : <>{activeGroup}</>
                      }
                      </div>
                      <div>
                      username: {userName}
                      </div>
                  </div>
                      {activeGroup && (<> {
                        messages === null ? <>
                        NO Messages
                        </> : 
                        messages.map((value , key) => (
                          <div className="flex p-5">
                            <Message key={Math.random() * 100} messages={value}/>
                            <br/>
                          </div>
                        ))}
                      </>)
                      }
                  </div>
                <div className="w-full sticky bottom-0">
                {
                  activeGroup  ?
                  <MessageBar  /> : <></>
                }
              </div>
          </div>
        </div>
  )
}

export default MessagesPanel
