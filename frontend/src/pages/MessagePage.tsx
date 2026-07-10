import { useEffect } from 'react'
import GroupsPanel from '../components/GroupsPanel'
import MessagesPanel from '../components/MessagesPanel'
import { useNavigate } from 'react-router'
import { useUserStore } from '../stores/useUserStore'
function MessagePage() {
  const userName = useUserStore(state => state.userName);
  const navigate = useNavigate();
  useEffect(() => {
    if (userName === "") {
      navigate("/");
    }
  }, [userName, navigate])
  return (
    <div className="bg-(--bg-dark) flex-wrap flex-40 flex">
      <GroupsPanel />
      <MessagesPanel />
    </div>
  )
}

export default MessagePage
