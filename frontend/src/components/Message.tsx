import {socket} from "../socket"
type messageType = {
  message : string;
  user ?: string
}
type propType = {
  messages : messageType;
  key : number;
}
function Message(props : propType) {
  const mine = props.messages.user === socket.id
  return (
    <div className="flex bg-[hsl(249,7%,35%)] justify-center rounded-2xl p-4 ">
        {
          props.messages.message
        }
    </div>
  )
}

export default Message

