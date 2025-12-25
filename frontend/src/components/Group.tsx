import { socket } from '../socket'
import useSocketStore from '../stores/socketStore'

type propType = {
  group:{
    groupName : string,
    groupId : string,
}
}
function Group(props : propType) {
    const joinGroup = useSocketStore(state => state.joinGroup);
  return (
    <div className='flex-1 justify-center m-4 rounded-2xl '>
      <button onClick={() => joinGroup(props.group.groupId , props.group.groupName)} className='bg-(--bg-light) text-white w-full h-full flex-1 rounded-xl p-4 border border-amber-50 hover:bg-(--bg) hover:text-white font-semibold text-lg'>
        {
            props.group.groupName
        }
      </button>
    </div>
  )
}

export default Group
