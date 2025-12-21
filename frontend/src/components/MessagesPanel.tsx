import MessageBar from './MessageBar'
import Message from './Message'
import type { chatMessage } from '../stores/socketStore';
import useSocketStore from '../stores/socketStore';
import { userStore } from '../stores/userStore';
function MessagesPanel() {
 
  const activeGroup : string | null = useSocketStore(state => state.activeGroupId)
  const userName = userStore(state => state.userName);
  
  const messages : chatMessage[] | null = useSocketStore(state => activeGroup == null ? null :state.groupMessages[activeGroup] || null);



return (
      <div className="flex flex-col bg-(--bg-light) hover:bg-(--bg-light) flex-4 rounded-2xl m-3  border border-[hsl(221,10%,50%)]">
            <div className="flex-col flex-1  p-4 flex overflow-y-auto">
                <div className=" flex-1 overflow-y-auto ">

                       <div className='flex justify-center self-end text-2xl font-bold font-serif'>
                      UserName : {
                        userName
                      }
                      </div>
                      <div className='flex justify-center self-end text-2xl font-bold font-serif'>
                      {
                        activeGroup === null ? 
                        <>Enter any group</> : <>{activeGroup}</>
                      }
                      </div>
                      {activeGroup && <>{
                        messages === null ? <>
                        NO Messages
                        </> : 
                        messages.map((value , key) => (
                          <div id={key.toString()} className="flex p-5">
                            <Message key={key} messages={value}/>
                            <br/>
                          </div>
                        ))}
                      </>
                      }
                  </div>
                <div className="w-full sticky bottom-0">
                { 
                  activeGroup &&
                  <MessageBar  />
                }
              </div>
          </div>
        </div>
  )
}

export default MessagesPanel
