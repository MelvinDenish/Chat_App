import {socket} from "../socket"
import { type messsageType } from "../stores/socketStore"
import { useUserStore } from "../stores/useUserStore"
type propType = {
  data : {
    userName : string,
    userId : string,
    messageData : string,
  }
}
function Message({data} : propType) {
  const userId = useUserStore(state => state.userId)
  const mine = data.userId === userId;
  return (
    <div className="flex flex-col flex-1 text-black font-medium  font-mono">
        {
          mine ? 
          <div className="self-end p-4 bg-(--bg-ligther) rounded-2xl">
{          data.messageData
}          </div>
          :
          <div className="self-start p-4 rounded-2xl bg-(--bg-ligthest)">
{          data.messageData
}          </div>
        }
        
    </div>
  )
}

export default Message

