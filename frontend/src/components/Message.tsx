import {socket} from "../socket"
import type { chatMessage } from "../stores/socketStore";

type propType = {
  messages : chatMessage;
}
function Message(props : propType) {
  const mine = props.messages.sender === socket.id
  return (
    <div className="flex flex-col flex-1 text-black font-medium  font-mono">
        {
          mine ? 
          <div className="self-end p-4 bg-(--bg-ligther) rounded-2xl">
{          props.messages.message
}          </div>
          :
          <div className="self-start p-4 rounded-2xl bg-(--bg-ligthest)">
{          props.messages.message
}          </div>
        }
        
    </div>
  )
}

export default Message

