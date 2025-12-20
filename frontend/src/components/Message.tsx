import {socket} from "../socket"
type messageType = {
  message : string;
  userid : string
}
type propType = {
  messages : messageType;
}
function Message(props : propType) {
  const mine = props.messages.userid === socket.id
  return (
    <div className="flex flex-col flex-1 text-(--text-primary)">
        {
          mine ? 
          <div className="self-end p-4 bg-(--bg-ligther) rounded-2xl">
{          props.messages.message
}          </div>
          :
          <div className="self-start p-4 rounded-2xl bg-(--bg-dark)">
{          props.messages.message
}          </div>
        }
        
    </div>
  )
}

export default Message

