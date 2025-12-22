import { useRef } from 'react'
import { useNavigate } from 'react-router'
import { useUserStore } from '../stores/userStore';

function LoginPage() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const setUserName = useUserStore(state => state.setUserName)
  const handleClick = () => {
    if(!inputRef.current || !inputRef.current.value)return ;
    setUserName(inputRef.current.value);
    navigate("/messages");
  }
  return (
    <div className='flex-40 bg-(--bg-dark) flex flex-wrap justify-center items-center'>
      <div className='bg-(--bg-light) rounded-2xl mb-20 flex  border flex-col justify-center items-center'>

        <div className='flex p-4'>
          <div className='p-4 font-serif'>Name : </div>
          <input type="text" className='rounded-2xl outline-0' ref={inputRef}/>
        </div>
        <button className='font-serif p-3  bg-slate-800 m-4 rounded-xl' onClick={handleClick}>
          ENTER
        </button>
        
      </div>
    </div>
  )
}

export default LoginPage
